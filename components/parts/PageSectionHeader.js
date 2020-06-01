import React from "react"
import styled from 'styled-components'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'

const PageSectionHeader = ({ className, heading }) => {

    return (
        <div className={className}>
            <h2>{heading}</h2>
        </div>
    )
}

const StyledPageSectionHeader = styled(PageSectionHeader)`
    position: relative;
    padding-bottom:  ${sizes.s40};
    margin-bottom: ${sizes.s58};
    h2 {
       
        color: ${colors.titleColor};
        font-family: ${fonts.eaves};
        font-weight: bold;
        font-style: italic;
        font-size: ${sizes.s36};
        line-height: ${sizes.s40};
        margin: 0;

        @media screen and ${breakpoints.laptopS} {
            font-size: ${sizes.s42};
            line-height: ${sizes.s52};
        }
    }
    &:after {
        position: absolute;
        bottom: 0;
        right: calc( 50% - ${sizes.s34} );
        height: ${sizes.s8};
        width: calc( ${sizes.s34} * 2 );
        background-color: ${colors.titleColor};
        content: '';
    }
`

export default StyledPageSectionHeader