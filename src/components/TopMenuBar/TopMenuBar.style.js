import styled from "styled-components"

import BurgerMenu from "../BurgerMenu/BurgerMenu"

export const StyledNav = styled.nav`
  color: ${({ theme }) => theme.color.deepBlue};
  display: flex;
  align-items: center;
  z-index: 1000;
  a {
    text-decoration: none;
    color: inherit;
  }
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
    margin-left: 35px;
  }
`

export const StyledBurgerMenu = styled(BurgerMenu)`
  ${({ theme }) => theme.media.smAbove} {
    display: none;
  }
`
