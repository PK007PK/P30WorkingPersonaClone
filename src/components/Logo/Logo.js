import React from "react"
import { StyledWrap, StyledP, StyledSpan } from "./Logo.style"

const Logo = ({ className }) => (
  <StyledP className={className}>
    Obywatel
    <StyledSpan>kontra ZUS</StyledSpan>
  </StyledP>
)

export default Logo
