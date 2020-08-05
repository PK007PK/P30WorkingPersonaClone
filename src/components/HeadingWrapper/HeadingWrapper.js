import React from "react"

import { StyledDiv } from "./HeadingWrapper.style"

const HeadingWrapper = ({ title, inputBackgroundColor, inputColor }) => (
  <>
    <StyledDiv
      inputBackgroundColor={inputBackgroundColor}
      inputColor={inputColor}
    >
      <h2>{title}</h2>
    </StyledDiv>
  </>
)

export default HeadingWrapper
