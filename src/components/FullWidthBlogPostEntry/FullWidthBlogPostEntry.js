import React from "react"
import PropTypes from "prop-types"

import {
  StyledContainer,
  StyledImgWrapper,
  StyledImg,
  StyledTxtWrapper,
  StyledDate,
  StyledTitle,
} from "./FullWidthBlogPostEntry.style"

const FullWidthBlogPostEntry = ({
  className,
  background,
  date,
  title,
  slug,
}) => (
  <StyledContainer to={`/articles/${slug}`}>
    <StyledImgWrapper className={className}>
      <StyledImg fluid={background}></StyledImg>
    </StyledImgWrapper>
    <StyledTxtWrapper>
      <StyledDate>{date}</StyledDate>
      <StyledTitle>{title}</StyledTitle>
    </StyledTxtWrapper>
  </StyledContainer>
)

FullWidthBlogPostEntry.propTypes = {
  background: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default FullWidthBlogPostEntry
