import { buildTypeName, findTypeName, findTypeKind } from "../helpers"
import { transformUnion, transformListOfUnions } from "./transform-union"
import { transformGatsbyNodeObject } from "~/steps/create-schema-customization/transform-fields/transform-object"
import { transformListOfGatsbyNodes } from "./transform-object"
import { getGatsbyNodeTypeNames } from "~/steps/source-nodes/fetch-nodes/fetch-nodes"
import { typeIsABuiltInScalar } from "~/steps/create-schema-customization/helpers"
import store from "~/store"
import { typeIsExcluded } from "~/steps/ingest-remote-schema/is-excluded"
import { getPluginOptions } from "~/utils/get-gatsby-api"

export const fieldTransformers = [
  {
    // non null scalars
    test: (field) =>
      field.type.kind === `NON_NULL` && field.type.ofType.kind === `SCALAR`,

    transform: ({ field }) => {
      if (typeIsABuiltInScalar(field.type)) {
        return `${field.type.ofType.name}!`
      } else {
        return `JSON!`
      }
    },
  },

  {
    // non null lists
    test: (field) =>
      field.type.kind === `NON_NULL` &&
      field.type.ofType.kind === `LIST` &&
      (field.type.ofType.name || field.type.ofType?.ofType?.name),

    transform: ({ field }) => {
      const typeName = findTypeName(field.type)
      const normalizedTypeName = typeIsABuiltInScalar(field.type)
        ? typeName
        : buildTypeName(typeName)

      return `[${normalizedTypeName}]!`
    },
  },

  {
    // non null lists of non null types
    test: (field) =>
      field.type.kind === `NON_NULL` &&
      field.type.ofType.kind === `LIST` &&
      field.type.ofType?.ofType?.kind === `NON_NULL`,

    transform: ({ field, fieldName }) => {
      const originalTypeName = findTypeName(field.type)
      const typeKind = findTypeKind(field.type)

      const normalizedType =
        typeKind === `SCALAR` && typeIsABuiltInScalar(field.type)
          ? originalTypeName
          : buildTypeName(originalTypeName)

      return {
        type: `[${normalizedType}!]!`,
        resolve: (source) => {
          const resolvedField = source[fieldName]

          if (typeof resolvedField !== `undefined`) {
            return resolvedField ?? []
          }

          const autoAliasedFieldPropertyName = `${fieldName}__typename_${field?.type?.name}`

          const aliasedField = source[autoAliasedFieldPropertyName]

          return aliasedField ?? []
        },
      }
    },
  },

  {
    // lists of non null builtin types
    test: (field) =>
      field.type.kind === `LIST` &&
      field.type.ofType.kind === `NON_NULL` &&
      (field.type.ofType.name ?? field.type.ofType?.ofType?.name) &&
      typeIsABuiltInScalar(field.type),

    transform: ({ field }) => `[${findTypeName(field.type)}!]`,
  },

  {
    // lists of non null types
    test: (field) =>
      field.type.kind === `LIST` &&
      field.type.ofType.kind === `NON_NULL` &&
      (field.type.ofType.name ?? field.type.ofType?.ofType?.name),

    transform: ({ field }) => `[${buildTypeName(findTypeName(field.type))}!]`,
  },

  {
    // scalars
    test: (field) => field.type.kind === `SCALAR`,
    transform: ({ field }) => {
      if (typeIsABuiltInScalar(field.type)) {
        return field.type.name
      } else {
        // custom scalars are typed as JSON
        // @todo if frequently requested,
        // make this hookable so a plugin could register a custom scalar
        return `JSON`
      }
    },
  },

  {
    // Gatsby node Objects OR Interfaces where all possible types are Gatsby nodes
    test: (field) => {
      const gatsbyNodeTypes = getGatsbyNodeTypeNames()

      const pluginOptions = getPluginOptions()

      const isAnInterfaceTypeOfGatsbyNodes =
        // if this is an interface
        field.type.kind === `INTERFACE` &&
        // and every possible type is a future gatsby node
        store
          .getState()
          // get the full type for this interface
          .remoteSchema.typeMap.get(findTypeName(field.type))
          // filter out any excluded types
          .possibleTypes?.filter(
            (possibleType) =>
              !typeIsExcluded({
                pluginOptions,
                typeName: possibleType.name,
              })
          )
          // if every remaining type is a Gatsby node type
          // then use this field transformer
          ?.every((possibleType) => gatsbyNodeTypes.includes(possibleType.name))

      return (
        (gatsbyNodeTypes.includes(field.type.name) &&
          field.type.kind === `OBJECT`) ||
        isAnInterfaceTypeOfGatsbyNodes
      )
    },

    transform: transformGatsbyNodeObject,
  },

  {
    // lists of gatsby-node objects
    test: (field) => {
      const gatsbyNodeTypes = getGatsbyNodeTypeNames()

      const {
        remoteSchema: { typeMap },
      } = store.getState()

      return (
        // this is a list of Gatsby nodes
        (field.type.kind === `LIST` &&
          field.type.ofType.kind === `OBJECT` &&
          gatsbyNodeTypes.includes(field.type.ofType.name)) ||
        // or it's a list of an interface type which Gatsby nodes implement
        (field.type.kind === `LIST` &&
          field.type.ofType.kind === `INTERFACE` &&
          typeMap
            .get(field.type.ofType.name)
            ?.possibleTypes?.find((possibleType) =>
              gatsbyNodeTypes.includes(possibleType.name)
            ))
      )
    },

    transform: transformListOfGatsbyNodes,
  },

  {
    // non-gatsby-node objects
    test: (field) => field.type.kind === `OBJECT`,
    transform: ({ field }) => buildTypeName(field.type.name),
  },

  {
    // lists of non-gatsby-node objects
    test: (field) =>
      field.type.kind === `LIST` &&
      (field.type.ofType.kind === `OBJECT` ||
        field.type.ofType.kind === `ENUM`),

    transform: ({ field }) => `[${buildTypeName(field.type.ofType.name)}]`,
  },

  {
    // lists of unions
    test: (field) =>
      field.type.kind === `LIST` && field.type.ofType.kind === `UNION`,

    transform: transformListOfUnions,
  },

  {
    // list of scalars
    test: (field) =>
      field.type.kind === `LIST` && field.type.ofType.kind === `SCALAR`,

    transform: ({ field }) => {
      if (typeIsABuiltInScalar(field.type)) {
        return `[${field.type.ofType.name}]`
      } else {
        return `[JSON]`
      }
    },
  },

  {
    // lists of interfaces
    test: (field) =>
      field.type.kind === `LIST` && field.type.ofType.kind === `INTERFACE`,

    transform: ({ field }) => `[${buildTypeName(field.type.ofType.name)}]`,
  },

  {
    // unions
    test: (field) => field.type.kind === `UNION`,
    transform: transformUnion,
  },

  {
    // interfaces
    test: (field) => field.type.kind === `INTERFACE`,
    transform: ({ field }) => buildTypeName(field.type.name),
  },

  {
    test: (field) =>
      findTypeKind(field.type) !== `LIST` && field.type.kind === `NON_NULL`,
    transform: ({ field }) => `${buildTypeName(findTypeName(field.type))}!`,
  },

  // for finding unhandled types
  // {
  //   test: () => true,
  //   transform: ({ field }) => dd(field),
  // },
]
