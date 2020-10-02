import styled from "styled-components"

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.color.mainButton};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.white};
  box-shadow: 5px 5px 0px ${({ theme }) => theme.color.white};
  padding: 0 30px;
  height: 45px;
  border: none;
  display: flex;
  align-items: center;
  transition: all 0.2s;

  :hover {
    background-color: ${({ theme }) => theme.color.secondaryButton};
    box-shadow: 5px 5px 0px ${({ theme }) => theme.color.mainButton};
  }

  i {
    margin-left: 10px;
  }
`

export const StyledA = styled.a`
  background-color: ${({ theme }) => theme.color.mainButton};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.white};
  transition: ${({ theme }) => theme.transitions.custom};
  box-shadow: 5px 5px 0px ${({ theme }) => theme.color.white};
  padding: 0 30px;
  height: 45px;
  border: none;
  display: flex;
  align-items: center;

  :hover {
    background-color: ${({ theme }) => theme.color.secondaryButton};
    box-shadow: 5px 5px 0px ${({ theme }) => theme.color.mainButton};
  }

  i {
    margin-left: 10px;
  }
`
