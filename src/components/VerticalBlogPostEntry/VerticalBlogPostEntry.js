import React from "react"
import PropTypes from "prop-types"

import { StyledContainer, StyledImg } from "./VerticalBlogPostEntry.style"

const VerticalBlogPostEntry = ({ background, date, title, slug, text }) => (
  <StyledContainer to={`/articles/${slug}`}>
    <StyledImg fluid={background}></StyledImg>
    <span>{date}</span>
    <h3>{title}</h3>
    <p>{text}</p>
  </StyledContainer>
)

VerticalBlogPostEntry.propTypes = {
  background: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default VerticalBlogPostEntry
