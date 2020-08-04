import styled from "styled-components"

export const StyledButton = styled.button`
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
