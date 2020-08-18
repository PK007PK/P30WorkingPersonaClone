import React from "react"
import { graphql } from "gatsby"

import HeadingSubpage from "../components/Sections/HeadingSubpage/HeadingSubpage"

import PlainTextSection from "../components/Sections/PlainTextSection/PlainTextSection"

const KontaktPage = ({ data }) => (
  <article>
    <HeadingSubpage
      fluid={data.datoCmsSiteSetup.policyPageHeroImage.fluid}
      title={"polityka prywatności"}
      slug={"#polityka"}
      description={data.datoCmsSiteSetup.policyPageDescription}
    />
    <PlainTextSection data={data.datoCmsSiteSetup.policyArticleContent} />
  </article>
)

export const query = graphql`
  {
    datoCmsSiteSetup {
      policyPageDescription
      policyArticleContent {
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
      policyPageHeroImage {
        fluid(maxWidth: 650, maxHeight: 500) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`

export default KontaktPage
