import React from "react"
import { graphql } from "gatsby"

import HeadingSubpage from "../components/Sections/HeadingSubpage/HeadingSubpage"

const KontaktPage = ({ data }) => (
  <>
    <HeadingSubpage
      data={data}
      title={"kontakt"}
      slug={"#kontakt"}
      description={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel odio at leo euismod dignissim id eu risus. Aliquam quis consectetur nisi, vel ullamcorper lorem. Q"
      }
    />
  </>
)

export const query = graphql`
  {
    file(name: { eq: "kontakt" }) {
      childImageSharp {
        fluid(maxWidth: 550, maxHeight: 395, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    allDatoCmsNews(sort: { fields: [date], order: DESC }) {
      nodes {
        author
        date
        title
        id
        featuredImage {
          fluid(maxWidth: 500) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
        articleContent {
          ... on DatoCmsParagraph {
            paragraphContentNode {
              childMdx {
                body
                excerpt(pruneLength: 120)
              }
            }
          }
        }
      }
    }
  }
`

export default KontaktPage
