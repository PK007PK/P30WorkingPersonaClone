import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import slugify from "slugify"
import { Navigation, Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"

import FeaturedNewsTile from "../../FeaturedNewsTile/FeaturedNewsTile"
import HeadingWrapper from "../../HeadingWrapper/HeadingWrapper"

import { StyledSectionLayout } from "./RecentlyAdded.style"

const query = graphql`
  {
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

const FeaturedNewsSection = () => {
  const data = useStaticQuery(query)

  return (
    <StyledSectionLayout padding={"50px 0 100px 0px"}>
      <HeadingWrapper
        title={"Najnowsze informacje"}
        inputColor={({ theme }) => theme.color.deepBlue}
        inputBackgroundColor={({ theme }) => theme.color.lightBlue}
      ></HeadingWrapper>

      {data.allDatoCmsNews.nodes.map(item => {
        return (
          <SwiperSlide>
            <FeaturedNewsTile
              date={item.date}
              title={item.title}
              text={
                item.articleContent[0].paragraphContentNode.childMdx.excerpt
              }
              slug={slugify(item.title, { lower: true })}
              key={item.id}
              background={item.featuredImage.fluid}
            />
          </SwiperSlide>
        )
      })}
    </StyledSectionLayout>
  )
}

export default FeaturedNewsSection
