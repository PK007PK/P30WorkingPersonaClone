import styled from "styled-components"
import { Link } from "gatsby"

import Logo from "../Logo/Logo"
import BurgerMenu from "../BurgerMenu/BurgerMenu"

export const StyledLink = styled(Link)`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -5px;
    left: 0;
    background-color: ${({ theme }) => theme.color.pink};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.1s ease-in-out;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }

  /* &:focus {
    outline: none !important;
    border: none !important;
  }

  &:focus::before {
    visibility: visible;
    transform: scaleX(1);
  } */
`

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
  margin-right: 10px;
  margin-top: 10px;

  ${({ theme }) => theme.media.smAbove} {
    display: none;
  }
`
