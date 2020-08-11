import React from "react"
import PropTypes from "prop-types"

import { StyledContainer, StyledImg } from "./VerticalBlogPostEntry.style"

const VerticalBlogPostEntry = ({ background, date, title, slug, text }) => (
  <StyledContainer to={`/articles/${slug}`}>
    <StyledImg fluid={background}></StyledImg>
    <span className="date">{date}</span>
    <h3 className="date">{title}</h3>
    <p className="text">{text}</p>
  </StyledContainer>
)

VerticalBlogPostEntry.propTypes = {
  background: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default VerticalBlogPostEntry
