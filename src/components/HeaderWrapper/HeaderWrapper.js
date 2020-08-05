import React from "react"

import { StyledDiv } from "./HeaderWrapper.style"

const HeaderWrapper = ({ title, inputBackgroundColor, inputColor }) => (
  <StyledDiv
    inputBackgroundColor={inputBackgroundColor}
    inputColor={inputColor}
  >
    <h2>{title}</h2>
  </StyledDiv>
)

export default HeaderWrapper
