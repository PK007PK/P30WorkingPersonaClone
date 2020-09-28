import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import HeadingSubpage from "../Sections/HeadingSubpage/HeadingSubpage"
import PlainTextSection from "../Sections/PlainTextSection/PlainTextSection"

const OMniePage = ({ data }) => {
  const title = data.datoCmsSiteSetup.siteTitle + " - o mnie"
  return (
    <>
      <Helmet title={title} />
      <article>
        <HeadingSubpage
          fluid={data.datoCmsSiteSetup.oMniePageHeroImage.fluid}
          title={"o mnie"}
          slug={"#o-mnie"}
          description={data.datoCmsSiteSetup.oMniePageDescription}
        />
        <PlainTextSection data={data.datoCmsSiteSetup.oMnieArticleContent} />
      </article>
    </>
  )
}

export const query = graphql`
  {
    directory {
      relativePath
      root
    }
    datoCmsSiteSetup {
      siteTitle
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
