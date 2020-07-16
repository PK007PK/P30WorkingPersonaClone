import React from "react"
import slugify from "slugify"

import Heading from "../components/Sections/00Heading/00Heading"
import SectionLayout from "../utilities/SectionLayout/SectionLayout"
import TilesWrapper from "../utilities/TilesWrapper/TilesWrapper"
import NewsTile from "../components/NewsTile/NewsTile"

const NewsPage = ({ data }) => (
  <>
    <Heading txt={"Aktualności"} data={data} />
    <SectionLayout>
      <h2>Aktualności</h2>
      <p style={{ marginBottom: "20px" }}>
        Najnowsze informacje z życia firmy, aktualności branżowe{" "}
      </p>
      <TilesWrapper>
        {data.allDatoCmsNews.nodes.map(item => {
          const abc =
            item.articleContent[0].paragraphContentNode.childMdx.excerpt
          return (
            <NewsTile
              date={item.date}
              title={item.title}
              text={
                item.articleContent[0].paragraphContentNode.childMdx.excerpt
              }
              slug={slugify(item.title, { lower: true })}
              key={item.id}
              background={item.featuredImage.fluid}
            />
          )
        })}
      </TilesWrapper>
    </SectionLayout>
  </>
)

export const query = graphql`
  {
    file(name: { eq: "tlo05" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 90) {
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

export default NewsPage
