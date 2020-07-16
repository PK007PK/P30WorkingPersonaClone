import React from "react"
import { StyledDiv, StyledSpan } from "./Logo.style"

const Logo = ({ className }) => (
  <StyledDiv className={className}>
    <StyledSpan>GEO</StyledSpan>
  </StyledDiv>
)

export default Logo
