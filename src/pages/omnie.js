import React from "react"
import { graphql } from "gatsby"

import HeadingSubpage from "../components/Sections/HeadingSubpage/HeadingSubpage"
import PlainTextSection from "../components/Sections/PlainTextSection/PlainTextSection"

const OMniePage = ({ data }) => (
  <article>
    <HeadingSubpage
      fluid={data.datoCmsSiteSetup.oMniePageHeroImage.fluid}
      title={"o mnie"}
      slug={"#o-mnie"}
      description={data.datoCmsSiteSetup.oMniePageDescription}
    />
    <PlainTextSection data={data.datoCmsSiteSetup.oMnieArticleContent} />
  </article>
)

export const query = graphql`
  {
    datoCmsSiteSetup {
      oMniePageDescription
      oMnieArticleContent {
        ... on DatoCmsParagraph {
          paragraphContentNode {
            childMdx {
              body
            }
          }
          id
        }
        ... on DatoCmsHeading {
          headingContent
          id
        }
        ... on DatoCmsArticleImage {
          imageData {
            fluid(maxWidth: 600) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          id
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
