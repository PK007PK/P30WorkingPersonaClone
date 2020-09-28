import styled from "styled-components"
import icon from "../../assets/icons/fb.svg"

export const StyledI = styled.i`
  width: 45px;
  display: block;
  height: 45px;
  background-color: ${({ theme }) => theme.color.active};
  background-image: url(${icon});
  background-size: cover;
  background-position: center;
  transition: all 0.2s;

  :hover {
    box-shadow: 0px 5px 0px ${({ theme }) => theme.color.active};
  }
`
