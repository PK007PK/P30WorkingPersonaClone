import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import SectionLayout from "../../../utilities/SectionLayout/SectionLayout"
import NewsTile from "../../NewsTile/NewsTile"
import TilesWrapper from "../../../utilities/TilesWrapper/TilesWrapper"

import { StyledWrapper, StyledLink } from "./02RecentNews.style"

const query = graphql`
  {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
      nodes {
        frontmatter {
          slug
          author
          date
          title
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 350, maxHeight: 350) {
                ...GatsbyImageSharpFluid_tracedSVG
                src
              }
            }
          }
        }
        excerpt(pruneLength: 120)
      }
    }
  }
`

const RecentNews = () => {
  const data = useStaticQuery(query)

  return (
    <>
      <SectionLayout>
        <h2>Aktualności</h2>
        <TilesWrapper>
          {data.allMdx.nodes.map(item => (
            <NewsTile
              date={item.frontmatter.date}
              title={item.frontmatter.title}
              text={item.excerpt}
              slug={item.frontmatter.slug}
              key={item.frontmatter.slug}
              background={item.frontmatter.featuredImage.childImageSharp.fluid}
            />
          ))}
        </TilesWrapper>
        <StyledWrapper>
          <StyledLink to="/news">Zobacz wszystkie</StyledLink>
        </StyledWrapper>
      </SectionLayout>
    </>
  )
}

export default RecentNews
