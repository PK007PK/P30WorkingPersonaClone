import React from "react"
import PropTypes from "prop-types"

import {
  StyledWrapper,
  StyledImg,
  StyledDate,
  StyledTitle,
  StyledTxt,
} from "./NewsTile.style"

const NewsTile = ({ className, background, date, title, text, slug }) => (
  <StyledWrapper className={className} to={`/articles/${slug}`}>
    <StyledImg fluid={background}></StyledImg>
    <StyledDate>{date}</StyledDate>
    <StyledTitle>{title}</StyledTitle>
    <StyledTxt>{text}</StyledTxt>
  </StyledWrapper>
)

NewsTile.propTypes = {
  background: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default NewsTile
