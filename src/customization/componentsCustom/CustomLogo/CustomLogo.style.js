import styled from 'styled-components';

export const StyledWrap = styled.div``;

export const StyledP = styled.p`
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-weight: bold;
  font-size: 38px;
  line-height: 38px;
  letter-spacing: -3px;

  ${({ secondary }) =>
    secondary &&
    `
    color: white;
  `}
`;

export const StyledSpan = styled.span`
  font-family: 'Montserat', sans-serif;
  font-size: 18px;
  letter-spacing: 0px;
  font-weight: ${({ theme }) => theme.fontWeight.light} !important;
  margin-top: -8px;
  color: ${({ theme }) => theme.color.active};
`;
