import React from "react"
import { Link } from "gatsby"

import {
  StyledWrapper,
  StyledImg,
  StyledDate,
  StyledTitle,
  StyledTxt,
} from "./NewsTile.style"

const NewsTile = ({ className, background, date, title, text, slug }) => (
  <StyledWrapper className={className} to={`/articles/${slug}`}>
    {console.log(background)}
    <StyledImg fluid={background}></StyledImg>
    <StyledDate>{date}</StyledDate>
    <StyledTitle>{title}</StyledTitle>
    <StyledTxt>{text}</StyledTxt>
  </StyledWrapper>
)

export default NewsTile
