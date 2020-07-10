import styled from "styled-components"
import { Link } from "gatsby"

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.color.carrot};
  color: ${({ theme }) => theme.color.milkWhite};
  padding: 10px 20px;
  transition: all 0.3s;

  :hover {
    background-color: ${({ theme }) => theme.color.deepBlue};
    color: ${({ theme }) => theme.color.milkWhite};
  }
`
