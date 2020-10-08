import React from "react"
import { StyledDiv } from "./TilesWrapper.style"

const TilesWrapper = ({ className, children }) => (
  <StyledDiv className={className}>{children}</StyledDiv>
)

export default TilesWrapper
