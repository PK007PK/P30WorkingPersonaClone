import React from "react"

import BootstrapContainer from "../BootstrapContainer/BootstrapContainer"

import { StyledSection } from "./SectionLayout.styles"

const SectionLayout = ({ className, padding, children }) => (
  <StyledSection padding={padding} className={className}>
    <BootstrapContainer>{children}</BootstrapContainer>
  </StyledSection>
)

export default SectionLayout
