import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import slugify from "slugify"

import HeadingWrapper from "../../HeadingWrapper/HeadingWrapper"

import {
  StyledSectionLayout,
  StyledBlogPostEntry,
  StyledButton,
  StyledButtonWrapper,
} from "./RecentlyAdded.style"

const FeaturedNewsSection = () => {
  const data = useStaticQuery(query)
  return (
    <StyledSectionLayout padding={"50px 0 50px 0px"}>
      <HeadingWrapper
        title={"Najnowsze wpisy"}
        inputColor={({ theme }) => theme.color.deepBlue}
        inputBackgroundColor={({ theme }) => theme.color.lightBlue}
      ></HeadingWrapper>

      {data.allDatoCmsNews.nodes.map(item => {
        return (
          <StyledBlogPostEntry
            date={item.date}
            title={item.title}
            text={item.articleContent[0].paragraphContentNode.childMdx.excerpt}
            slug={slugify(item.title, { lower: true })}
            key={item.id}
            background={item.featuredImage.fluid}
          />
        )
      })}
      <StyledButtonWrapper>
        <StyledButton to="/blog">Wszystkie wpisy na blogu</StyledButton>
      </StyledButtonWrapper>
    </StyledSectionLayout>
  )
}

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

export default FeaturedNewsSection
