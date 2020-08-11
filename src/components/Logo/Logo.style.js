import styled from "styled-components"

export const StyledWrap = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
`

export const StyledP = styled.p`
  font-weight: 800;
  font-size: 30px;
  letter-spacing: -2px;
  text-transform: uppercase;
  display: block;
  position: relative;
  color: white;

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    background-color: ${({ theme }) => theme.color.deepBlue};
    width: 58px;
    height: 100px;
    z-index: -1;
    transform: translateY(-50%);
  }
`

export const StyledSpan = styled.span`
  font-size: 30px;
  font-weight: 200;
  margin-left: 4px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.color.deepBlue};
`
