import React from "react"
import Layout from "../../components/Layout"
import PageSection from '../../components/page-sections/GenericPageSection'

export default () => {
    return (
<Layout>
    <PageSection pad>
        <h1>Footer</h1>

        <p>The footer appears at the bottom of all pages:</p>

        <p>At mobile (screens smaller than 768px wide), the footer format changes to a single column.</p>
        <p>Social Media icons will be added in a future sprint along with the dark red diagonal that crosses through them.</p>
        <p>Currently in mobile view, the order of the UW Site Links and the general navigation links are flipped. This will be fixed in a future sprint.</p>     
        <p>Crest image needs to be replaced with higher quality version</p>
        <p>Current spacing between bottom of the navigation lists and the bottom border in desktop is slightly off. This is due to a padding issue that will be fixed in a future sprint</p>
    </PageSection>
</Layout>
    )
}         