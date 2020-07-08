import React from "react"
import { StyledDiv, StyledSpan } from "./Logo.style"

const Logo = ({ className }) => (
  <StyledDiv className={className}>
    <StyledSpan>GPI</StyledSpan>
  </StyledDiv>
)

export default Logo
