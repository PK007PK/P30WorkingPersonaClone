import styled from "styled-components"
import icon from "../../assets/icons/yt.svg"

export const StyledI = styled.i`
  width: 30px;
  display: inline-block;
  height: 25px;
  background-color: ${({ theme }) => theme.color.pink};
  background-image: url(${icon});
`
