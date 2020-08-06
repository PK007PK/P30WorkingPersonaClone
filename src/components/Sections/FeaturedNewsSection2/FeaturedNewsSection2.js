import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import slugify from "slugify"

import Swiper from "react-id-swiper"
import "swiper/swiper.scss"

import FeaturedNewsTile from "../../FeaturedNewsTile/FeaturedNewsTile"
import HeadingWrapper from "../../HeadingWrapper/HeadingWrapper"
import IconArrowLeft from "../../IconArrowLeft/IconArrowLeft"
import IconArrowRight from "../../IconArrowRight/IconArrowRight"

import {
  StyledSectionLayout,
  SwiperContainer,
  ArrowContainer,
  StyledCarouselWrapper,
} from "./FeaturedNewsSection2.style"

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

const FeaturedNewsSection2 = () => {
  const data = useStaticQuery(query)
  const [swiper, updateSwiper] = useState(null)
  const params = {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
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
      <StyledCarouselWrapper>
        <ArrowContainer>
          <IconArrowLeft />
          <IconArrowRight />
        </ArrowContainer>
        <SwiperContainer>
          <Swiper {...params} getSwiper={updateSwiper}>
            {data.allDatoCmsNews.nodes.map(item => {
              return (
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
              )
            })}
          </Swiper>
        </SwiperContainer>
      </StyledCarouselWrapper>
    </StyledSectionLayout>
  )
}

export default FeaturedNewsSection2
