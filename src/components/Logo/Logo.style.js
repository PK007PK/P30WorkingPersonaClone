import styled from 'styled-components';

export const LogoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    font-family: 'Ubuntu', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-weight: bold;
    font-size: 38px;
    line-height: 38px;
    letter-spacing: -3px;

    ${({ light }) =>
      light &&
      `
    color: white;
  `}
  }

  span {
    font-size: 25px;
    line-height: 25px;
    font-weight: 200;
    margin-bottom: -8px;
    margin-right: -2px;
    color: ${({ theme }) => theme.color.active};
  }
`;
