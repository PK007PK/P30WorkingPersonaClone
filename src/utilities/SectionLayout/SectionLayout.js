import React from "react"
import styled from "styled-components"

import BootstrapContainer from "../BootstrapContainer/BootstrapContainer"

const StyledSection = styled.section`
  padding: 100px 0;
  padding-top: ${({ padding }) => padding};
`

const StyledContainer = styled(BootstrapContainer)``

const SectionLayout = ({ className, padding, children }) => (
  <StyledSection padding={padding} className={className}>
    <StyledContainer>{children}</StyledContainer>
  </StyledSection>
)

export default SectionLayout
