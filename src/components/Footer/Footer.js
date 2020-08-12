import React from "react"
import { Link } from "gatsby"

import { StyledSectionLayout, StyledWrapper } from "./Footer.style"

const Footer = () => (
  <StyledSectionLayout padding={"20px 0"}>
    <StyledWrapper>
      <Link to="/privacy">Polityka prywatności</Link>
      <p className="copyryght">Copyright © Przykładowa Firma</p>
    </StyledWrapper>
  </StyledSectionLayout>
)

export default Footer
