import React from "react"
import { Link } from "gatsby"

import {
  StyledNav,
  StyledLogo,
  StyledWrapper,
  StyledBurgerMenu,
} from "./TopMenuBar.style"

const TopMenuBar = ({ className }) => (
  <>
    <StyledNav className={className}>
      <Link to="/">
        <StyledLogo>GPI</StyledLogo>
      </Link>
      <StyledWrapper>
        <li>
          <Link
            to="/"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            główna
          </Link>
        </li>
        <li>
          <Link
            to="/news"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            aktualności
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            kontakt
          </Link>
        </li>
      </StyledWrapper>
      <StyledBurgerMenu />
    </StyledNav>
  </>
)

export default TopMenuBar
