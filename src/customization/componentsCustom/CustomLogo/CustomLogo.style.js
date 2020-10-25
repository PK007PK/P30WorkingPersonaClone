import styled from 'styled-components';

export const StyledWrap = styled.div``;

export const StyledP = styled.p`
  font-family: 'Lobster';
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-weight: bold;
  font-size: 38px;
  line-height: 38px;
  /* letter-spacing: -2px; */

  ${({ secondary }) =>
    secondary &&
    `
    color: white;
  `}
`;

export const StyledSpan = styled.span`
  font-family: 'Montserrat';
  font-size: 18px;
  letter-spacing: 0px;
  font-weight: ${({ theme }) => theme.fontWeight.light} !important;
  margin-top: -4px;
  letter-spacing: -0.5px;
  /* color: ${({ theme }) => theme.color.color3}; */

  ${({ secondary }) =>
    secondary &&
    `
    color: white;
  `}
`;
