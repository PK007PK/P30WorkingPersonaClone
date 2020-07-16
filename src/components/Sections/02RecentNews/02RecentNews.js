import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import slugify from "slugify"

import SectionLayout from "../../../utilities/SectionLayout/SectionLayout"
import NewsTile from "../../NewsTile/NewsTile"
import TilesWrapper from "../../../utilities/TilesWrapper/TilesWrapper"

import { StyledWrapper, StyledLink } from "./02RecentNews.style"

const query = graphql`
  {
    allDatoCmsNews(sort: { fields: [date], order: DESC }, limit: 3) {
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

const RecentNews = () => {
  const data = useStaticQuery(query)

  return (
    <SectionLayout>
      <h2>Aktualności</h2>
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
      <StyledWrapper>
        <StyledLink to="/news">Zobacz wszystkie</StyledLink>
      </StyledWrapper>
    </SectionLayout>
  )
}

export default RecentNews
