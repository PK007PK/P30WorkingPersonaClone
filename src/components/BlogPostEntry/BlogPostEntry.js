import React from "react"
import PropTypes from "prop-types"

import {
  StyledContainer,
  StyledImgWrapper,
  StyledImg,
  StyledTxtWrapper,
  StyledDate,
  StyledTitle,
} from "./BlogPostEntry.style"

const BlogPostEntry = ({ className, background, date, title, slug }) => (
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

BlogPostEntry.propTypes = {
  background: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default BlogPostEntry
