import React from "react"
import PropTypes from "prop-types"

import {
  StyledContainer,
  StyledImgWrapper,
  StyledImg,
  StyledTxtWrapper,
  StyledDate,
  StyledTitle,
  StyledYouTubeIcon,
} from "./FullWidthBlogPostEntry.style"

const FullWidthBlogPostEntry = ({
  className,
  background,
  date,
  title,
  slug,
  youtube,
}) => (
  <StyledContainer to={`/articles/${slug}`}>
    <StyledImgWrapper className={className}>
      <StyledImg fluid={background}></StyledImg>
      {youtube ? (
        <>
          <StyledYouTubeIcon />
        </>
      ) : null}
      <StyledDate>{date}</StyledDate>
    </StyledImgWrapper>
    <StyledTxtWrapper>
      <StyledTitle>{title}</StyledTitle>
    </StyledTxtWrapper>
  </StyledContainer>
)

FullWidthBlogPostEntry.propTypes = {
  background: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  youtube: PropTypes.string,
}

export default FullWidthBlogPostEntry
