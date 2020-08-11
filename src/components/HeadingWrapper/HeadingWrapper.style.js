import styled from "styled-components"

export const StyledDiv = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: -50px;
  height: 50px;
  width: 80vw;
  border-radius: 0 50px 0 0;
  color: ${props => props.inputColor || null};
  background-color: ${props => props.inputBackgroundColor || null};

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
    background-color: ${props => props.inputBackgroundColor || null};
    position: absolute;
  }

  .title {
    font-size: 18px;
  }
`
