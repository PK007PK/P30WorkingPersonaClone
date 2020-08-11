import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
        featuredImage {
          fluid(maxWidth: 500) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`

const FeaturedNewsSection = () => {
  const data = useStaticQuery(query)

  const params = {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: "auto",
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1450: {
        slidesPerView: 3,
      },
    },
  }

  return (
    <StyledSectionLayout padding={"50px 0 100px 0px"}>
      <HeadingWrapper
        title={"Wyróżnione wpisy"}
        inputColor={({ theme }) => theme.color.deepBlue}
        inputBackgroundColor={({ theme }) => theme.color.blue}
      ></HeadingWrapper>

      <Swiper {...params}>
        {data.allDatoCmsNews.nodes.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <FeaturedNewsTile
                background={item.featuredImage.fluid}
                date={item.date}
                title={item.title}
                slug={slugify(item.title, { lower: true })}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </StyledSectionLayout>
  )
}

export default FeaturedNewsSection
