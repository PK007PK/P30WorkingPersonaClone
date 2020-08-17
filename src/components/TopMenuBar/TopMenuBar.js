import React from "react"
import { Link } from "gatsby"

import {
  StyledNav,
  StyledLogo,
  StyledWrapper,
  StyledBurgerMenu,
  StyledLink,
} from "./TopMenuBar.style"

const TopMenuBar = ({ className }) => (
  <>
    <StyledNav className={className}>
      <Link to="/">
        <StyledLogo />
      </Link>
      <StyledWrapper>
        <li>
          <StyledLink
            to="/"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            główna
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/omnie"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            o mnie
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/blog"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            blog
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/uslugi"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            uslugi
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/kontakt"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            kontakt
          </StyledLink>
        </li>
      </StyledWrapper>
      <StyledBurgerMenu />
    </StyledNav>
  </>
)

export default TopMenuBar
