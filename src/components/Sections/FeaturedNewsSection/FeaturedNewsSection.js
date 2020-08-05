import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import slugify from "slugify"

import NewsTile from "../../NewsTile/NewsTile"
import TilesWrapper from "../../../utilities/TilesWrapper/TilesWrapper"

import {
  StyledSectionLayout,
  StyledWrapper,
  StyledLink,
} from "./FeaturedNewsSection.style"

const query = graphql`
  {
    allDatoCmsNews(
      sort: { fields: [date], order: DESC }
      filter: { featured: { eq: true } }
    ) {
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

const FeaturedNewsSection = () => {
  const data = useStaticQuery(query)

  return (
    <StyledSectionLayout>
      <h2>Wyróżnione wpisy</h2>
      <TilesWrapper>
        {data.allDatoCmsNews.nodes.map(item => {
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
    </StyledSectionLayout>
  )
}

export default FeaturedNewsSection
