import React from "react"
import { Link } from "gatsby"
import Logo from "../Logo/Logo"
import { StyledNav, StyledWrapper, StyledBurgerMenu } from "./TopMenuBar.style"

const TopMenuBar = ({ className }) => (
  <>
    <StyledNav className={className}>
      <Link to="/">
        <Logo />
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
            to="/omnie"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            o mnie
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            blog
          </Link>
        </li>
        <li>
          <Link
            to="/uslugi"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            uslugi
          </Link>
        </li>
        <li>
          <Link
            to="/kontakt"
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
