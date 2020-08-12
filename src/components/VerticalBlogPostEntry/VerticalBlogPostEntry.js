import React from "react"
import PropTypes from "prop-types"

import {
  StyledContainer,
  StyledImg,
  StyledYouTubeIcon,
} from "./VerticalBlogPostEntry.style"

const VerticalBlogPostEntry = ({
  background,
  date,
  title,
  slug,
  text,
  youtube,
}) => (
  <StyledContainer to={`/articles/${slug}`}>
    {youtube ? (
      <>
        <StyledYouTubeIcon />
      </>
    ) : null}
    <StyledImg fluid={background}></StyledImg>
    <span className="date">{date}</span>
    <h3 className="title">{title}</h3>
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
