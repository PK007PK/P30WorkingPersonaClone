import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import slugify from "slugify"

import HeadingWrapper from "../../components/HeadingWrapper/HeadingWrapper"

import {
  StyledSectionLayout,
  StyledFullWidthBlogPostEntry,
  StyledButtonWrapper,
} from "./RecentlyAdded.style"

const StyledButton = styled(Link)`
  background-color: ${({ theme }) => theme.color.active};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.white};
  padding: 0 30px;
  height: 45px;
  border: none;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  box-shadow: 5px 5px 0px ${({ theme }) => theme.color.white};

  :hover {
    background-color: ${({ theme }) => theme.color.color3};
    box-shadow: 5px 5px 0px ${({ theme }) => theme.color.active};
  }
`

const FeaturedNewsSection = () => {
  const data = useStaticQuery(query)
  return (
    <StyledSectionLayout padding={"50px 0 50px 0px"}>
      <HeadingWrapper
        title={"Najnowsze wpisy"}
        txtColor={({ theme }) => theme.color.color3}
        backgroundColor={({ theme }) => theme.color.white}
      ></HeadingWrapper>

      {data.allDatoCmsNews.nodes.map(item => {
        return (
          <StyledFullWidthBlogPostEntry
            date={item.date}
            title={item.title}
            text={item.articleContent[0].paragraphContentNode.childMdx.excerpt}
            slug={slugify(item.title, { lower: true })}
            key={item.id}
            background={item.featuredImage.fluid}
            youtube={item.youtube}
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
        youtube
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
