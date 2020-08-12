import styled from "styled-components"

import Logo from "../Logo/Logo"
import BurgerMenu from "../BurgerMenu/BurgerMenu"

export const StyledNav = styled.nav`
  color: ${({ theme }) => theme.color.deepBlue};
  display: flex;
  align-items: center;
`

export const StyledLogo = styled(Logo)`
  margin-right: 85px;
`

export const StyledWrapper = styled.ul`
  align-items: center;
  height: 68px;
  display: none;

  ${({ theme }) => theme.media.smAbove} {
    display: flex;
  }

  li {
    margin-left: 35px;
  }
`

export const StyledBurgerMenu = styled(BurgerMenu)`
  ${({ theme }) => theme.media.smAbove} {
    display: none;
  }
`
