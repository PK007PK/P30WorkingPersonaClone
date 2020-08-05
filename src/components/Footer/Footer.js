import React from "react"
import { StyledSectionLayout, StyledWrapper } from "./Footer.style"

const Footer = () => (
  <StyledSectionLayout>
    <StyledWrapper>
      <a href="tel:608658488" aria-label="Numer telefonu">
        Tel: 777 777 222
      </a>
      <p>Copyright © Przykładowa Firma</p>
    </StyledWrapper>
  </StyledSectionLayout>
)

export default Footer
