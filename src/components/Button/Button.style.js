import styled from "styled-components"
import { Link } from "gatsby"

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.color.pink};
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  color: ${({ theme }) => theme.color.white};
  padding: 0 30px;
  height: 45px;
  border: none;
  display: flex;
  align-items: center;

  i {
    margin-left: 10px;
  }
`

export const StyledA = styled.a`
  background-color: ${({ theme }) => theme.color.pink};
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  color: ${({ theme }) => theme.color.white};
  padding: 0 30px;
  height: 45px;
  border: none;
  display: flex;
  align-items: center;

  i {
    margin-left: 10px;
  }
`
