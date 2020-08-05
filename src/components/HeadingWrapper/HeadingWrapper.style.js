import styled from "styled-components"

export const StyledDiv = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: -50px;
  width: 30vw;
  height: 50px;
  border-radius: 0 50px 0 0;
  /* box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25); */
  background-color: ${props => props.inputBackgroundColor || "white"};
  color: ${props => props.inputColor || "black"};
  z-index: 2;

  ::before {
    content: "";
    width: 2000px;
    height: 50px;
    left: -2000px;
    z-index: 1;
    background-color: ${props => props.inputBackgroundColor || "white"};
    position: absolute;
  }

  h2 {
    margin: 0;
    text-align: left;
    z-index: 2;
  }
`
