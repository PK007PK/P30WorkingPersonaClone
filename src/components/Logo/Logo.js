import React from "react"
import { StyledWrap, StyledP, StyledSpan } from "./Logo.style"

const Logo = ({ className }) => (
  <StyledWrap className={className}>
    <StyledP>Lex</StyledP>
    <StyledSpan>med</StyledSpan>
  </StyledWrap>
)

export default Logo
