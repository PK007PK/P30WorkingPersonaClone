import React from "react"
import { StyledDiv } from "./FocusHoverTabTxt.style"

const FocusHoverTabTxt = ({ children }) => (
  <StyledDiv tabIndex="0">{children}</StyledDiv>
)

export default FocusHoverTabTxt
