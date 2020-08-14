import React from "react"
import { graphql } from "gatsby"

import HeadingSubpage from "../components/Sections/HeadingSubpage/HeadingSubpage"
import PlainTextSection from "../components/Sections/PlainTextSection/PlainTextSection"

const UslugiPage = ({ data }) => (
  <>
    <HeadingSubpage
      fluid={data.datoCmsSiteSetup.uslugiPageHeroImage.fluid}
      title={"uslugi"}
      slug={"#uslugi"}
      description={data.datoCmsSiteSetup.uslugiPageDescription}
    />
    <PlainTextSection
      data={data.datoCmsSiteSetup.uslugiPageTextContentNode.childMdx.body}
    />
  </>
)

export const query = graphql`
  {
    datoCmsSiteSetup {
      uslugiPageDescription
      uslugiPageTextContentNode {
        childMdx {
          body
        }
      }
      uslugiPageHeroImage {
        fluid(maxWidth: 650, maxHeight: 500) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`

export default UslugiPage
