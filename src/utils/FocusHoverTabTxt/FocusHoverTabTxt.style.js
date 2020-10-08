import styled from "styled-components"

export const StyledDiv = styled.div`
  position: relative;
  &:before {
    content: "";
    background-color: ${({ theme }) => theme.color.active};
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -5px;
    left: 0;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.1s ease-in-out;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }

  &:focus {
    outline: none !important;
    border: none !important;
  }

  &:focus::before {
    visibility: visible;
    transform: scaleX(1);
  }
`
