import React from "react"
import { StyledSectionLayout, StyledWrapper } from "./Footer.style"

const Footer = () => (
  <StyledSectionLayout padding={"20px 0"}>
    <StyledWrapper>
      Polityka prywatności
      <p className="copyryght">Copyright © Przykładowa Firma</p>
    </StyledWrapper>
  </StyledSectionLayout>
)

export default Footer
