import React from "react"

import { StyledImg } from "./AspectRatioContainer.styles"

const AspectRatioImg = ({ width, height, children, className, fluid }) => (
  <StyledImg fluid={fluid} className={className} width={width} height={height}>
    {children}
  </StyledImg>
)

export default AspectRatioImg
