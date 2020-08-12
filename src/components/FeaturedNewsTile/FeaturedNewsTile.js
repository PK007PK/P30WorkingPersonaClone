import React from "react"
import PropTypes from "prop-types"

import {
  StyledWrapper,
  StyledImg,
  StyledDate,
  StyledTitle,
  StyledYouTubeIcon,
} from "./FeaturedNewsTile.style"

const FeaturedNewsTile = ({
  className,
  background,
  date,
  title,
  slug,
  youtube,
}) => (
  <StyledWrapper className={className} to={`/articles/${slug}`}>
    {youtube ? (
      <>
        <StyledYouTubeIcon />
      </>
    ) : null}
    <StyledImg fluid={background}></StyledImg>
    <StyledDate>{date}</StyledDate>
    <StyledTitle>{title}</StyledTitle>
  </StyledWrapper>
)

FeaturedNewsTile.propTypes = {
  background: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  youtube: PropTypes.string,
}

export default FeaturedNewsTile
