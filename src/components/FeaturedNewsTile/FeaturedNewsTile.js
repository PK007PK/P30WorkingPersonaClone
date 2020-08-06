import React from "react"
import PropTypes from "prop-types"

import {
  StyledWrapper,
  StyledImg,
  StyledDate,
  StyledTitle,
} from "./FeaturedNewsTile.style"

const FeaturedNewsTile = ({ className, background, date, title, slug }) => (
  <StyledWrapper className={className} to={`/articles/${slug}`}>
    <StyledImg fluid={background}></StyledImg>
    <StyledDate>{date}</StyledDate>
    <StyledTitle>{title}</StyledTitle>
  </StyledWrapper>
)

FeaturedNewsTile.propTypes = {
  background: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default FeaturedNewsTile
