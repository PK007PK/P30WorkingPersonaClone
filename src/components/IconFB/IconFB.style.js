import styled from "styled-components"
import icon from "../../assets/icons/fb.svg"

export const StyledI = styled.i`
  width: 45px;
  display: block;
  height: 45px;
  background-color: ${({ theme }) => theme.color.pink};
  background-image: url(${icon});
  background-size: cover;
  background-position: center;
`
