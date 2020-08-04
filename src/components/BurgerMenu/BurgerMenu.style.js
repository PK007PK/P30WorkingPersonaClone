import styled from "styled-components"

export const StyledBurgerMenu = styled.div`
  position: fixed;
  top: 30px;
  right: 0px;
  z-index: 1000;
`

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  transition: transform 0.3s 0.1s ease-in-out;
  transform: ${props => (props.isActive ? "translateX(-250px)" : null)};

  div {
    width: 40px;
    height: 20px;
    position: relative;
  }
`

export const StyledSpan = styled.span`
  width: 40px;
  height: 4px;
  border-radius: 10px;
  background-color: ${props => (props.isActive ? "transparent" : "black")};
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.1s 0.2s ease-in-out;

  &::after,
  &::before {
    content: "";
    width: 40px;
    position: absolute;
    height: 4px;
    border-radius: 10px;
    background-color: black;
    transition: transform 0.1s 0.2s ease-in-out;
  }

  &::before {
    transform: ${props =>
      props.isActive ? "translateY(10px) rotate(45deg)" : null};
    top: -10px;
    left: 0;
  }

  &::after {
    transform: ${props =>
      props.isActive ? "translateY(-10px) rotate(-45deg)" : null};
    top: 10px;
    left: 0;
  }
`

export const StyledNavigation = styled.div`
  transition: transform 0.3s 0.1s ease-in-out;
  height: 100vh;
  width: 250px;
  background-color: black;
  color: white;
  position: absolute;
  top: -30px;
  right: -10px;
  transform: translateX(250px);
  transform: ${props => (props.isActive ? "translateX(0)" : null)};
`

export const StyledList = styled.ul`
  list-style: none;
  margin-top: 50px;

  li {
    list-style: none;
    margin-top: 50px;
  }

  a {
    margin: 20px;
    padding: 4px;
  }
`
