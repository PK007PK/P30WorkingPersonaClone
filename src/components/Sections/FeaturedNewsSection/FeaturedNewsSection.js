import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import slugify from "slugify"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"

import FeaturedNewsTile from "../../FeaturedNewsTile/FeaturedNewsTile"
import HeadingWrapper from "../../HeadingWrapper/HeadingWrapper"

import { StyledSectionLayout } from "./FeaturedNewsSection.style"

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
        youtube
        featuredImage {
          fluid(maxWidth: 500) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`

const StyledSwiper = styled(Swiper)`
  background-color: ${({ theme }) => theme.color.blue};
  padding-bottom: 100px;
  z-index: 0;
`

const FeaturedNewsSection = () => {
  const data = useStaticQuery(query)

  const params = {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 30,
    speed: 40,
    breakpoints: {
      0: {
        slidesOffsetBefore: -40,
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
        slidesOffsetBefore: -40,
      },
      768: {
        slidesPerView: 2,
        slidesOffsetBefore: -40,
      },
      992: {
        slidesPerView: 2,
        slidesOffsetBefore: -40,
      },
      1200: {
        slidesPerView: 3,
        slidesOffsetBefore: -40,
      },
      1450: {
        slidesPerView: 3,
        slidesOffsetBefore: -40,
      },
      1600: {
        slidesPerView: 4,
        slidesOffsetBefore: -40,
      },
    },
  }

  return (
    <>
      <StyledSectionLayout padding={"50px 0 0px 0px"}>
        <HeadingWrapper
          title={"Wyróżnione wpisy"}
          inputColor={({ theme }) => theme.color.deepBlue}
          inputBackgroundColor={({ theme }) => theme.color.blue}
        ></HeadingWrapper>

        <StyledSwiper {...params}>
          {data.allDatoCmsNews.nodes.map(item => {
            return (
              <SwiperSlide key={item.id}>
                <FeaturedNewsTile
                  background={item.featuredImage.fluid}
                  date={item.date}
                  title={item.title}
                  youtube={item.youtube}
                  slug={slugify(item.title, { lower: true })}
                />
              </SwiperSlide>
            )
          })}
        </StyledSwiper>
      </StyledSectionLayout>
    </>
  )
}

export default FeaturedNewsSection
