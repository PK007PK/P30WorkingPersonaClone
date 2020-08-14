import React from "react"
import { graphql } from "gatsby"

import HeadingSubpage from "../components/Sections/HeadingSubpage/HeadingSubpage"
import PlainTextSection from "../components/Sections/PlainTextSection/PlainTextSection"

const OMniePage = ({ data }) => (
  <>
    <HeadingSubpage
      fluid={data.datoCmsSiteSetup.oMniePageHeroImage.fluid}
      title={"o mnie"}
      slug={"#o-mnie"}
      description={data.datoCmsSiteSetup.oMniePageDescription}
    />
    <PlainTextSection
      data={data.datoCmsSiteSetup.oMniePageTextContentNode.childMdx.body}
    />
  </>
)

export const query = graphql`
  {
    datoCmsSiteSetup {
      oMniePageDescription
      oMniePageTextContentNode {
        childMdx {
          body
        }
      }
      oMniePageHeroImage {
        fluid(maxWidth: 550, maxHeight: 800) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`

export default OMniePage
