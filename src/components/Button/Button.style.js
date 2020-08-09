import styled from "styled-components"
import { Link } from "gatsby"

export const StyledButton = styled(Link)`
  background-color: ${({ theme }) => theme.color.pink};
  color: white;
  padding: 0 30px;
  height: 45px;
  border: none;
  font-weight: 200;
  display: flex;
  align-items: center;

  i {
    margin-left: 10px;
  }
`

export const StyledA = styled.a`
  background-color: ${({ theme }) => theme.color.pink};
  color: white;
  padding: 0 30px;
  height: 45px;
  border: none;
  font-weight: 200;
  display: flex;
  align-items: center;

  i {
    margin-left: 10px;
  }
`
