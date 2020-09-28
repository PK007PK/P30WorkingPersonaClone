import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import slugify from "slugify"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"

import FeaturedNewsTile from "../../components/FeaturedNewsTile/FeaturedNewsTile"
import HeadingWrapper from "../../components/HeadingWrapper/HeadingWrapper"

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
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1450: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  }

  return (
    <>
      <StyledSectionLayout padding={"70px 0 0px 0px"}>
        <HeadingWrapper
          title={"Wyróżnione wpisy"}
          inputColor={({ theme }) => theme.color.white}
          inputBackgroundColor={({ theme }) => theme.color.deepBlue}
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
