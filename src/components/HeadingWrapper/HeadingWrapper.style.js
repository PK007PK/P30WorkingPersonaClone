import styled from "styled-components"

export const StyledDiv = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: -50px;
  height: 50px;
  width: 80vw;
  border-radius: 0 50px 0 0;
  background-color: ${props => props.inputBackgroundColor || "white"};
  color: ${props => props.inputColor || "black"};
  z-index: 2;

  ${({ theme }) => theme.media.mdAbove} {
    width: 40vw;
  }

  ${({ theme }) => theme.media.lgAbove} {
    width: 30vw;
  }

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
    font-size: 18px;
  }
`
