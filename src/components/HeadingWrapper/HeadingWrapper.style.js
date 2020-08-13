import styled from "styled-components"

export const StyledDiv = styled.div`
  color: ${props => props.inputColor || null};
  background-color: ${props => props.inputBackgroundColor || null};
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: -40px;
  height: 50px;
  width: 80vw;
  border-radius: 0 50px 0 0;

  ${({ theme }) => theme.media.mdAbove} {
    width: 40vw;
  }

  ${({ theme }) => theme.media.lgAbove} {
    width: 30vw;
  }

  ::before {
    content: "";
    background-color: ${props => props.inputBackgroundColor || null};
    width: 2000px;
    height: 50px;
    left: -2000px;
    position: absolute;
  }

  .title {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`
