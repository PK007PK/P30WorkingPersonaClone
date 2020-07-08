import styled from "styled-components"

import Logo from "../Logo/Logo"
import BurgerMenu from "../BurgerMenu/BurgerMenu"

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const StyledLogo = styled(Logo)`
  margin-right: 10px;
`

export const StyledWrapper = styled.ul`
  align-items: center;
  height: 68px;
  margin: 0;
  list-style-type: none;
  display: none;

  ${({ theme }) => theme.media.smAbove} {
    display: flex;
  }

  li {
    margin: 0;
    margin-left: 45px;
  }
`

export const StyledBurgerMenu = styled(BurgerMenu)`
  ${({ theme }) => theme.media.smAbove} {
    display: none;
  }
`
