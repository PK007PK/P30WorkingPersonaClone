import styled from 'styled-components';

export const ImgPlaceholderStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ light, theme }) => (light ? theme.color.color3 : 'white')};
  background-color: ${({ light }) => (light ? 'white' : 'inherit')};
  border: 1px solid ${({ light }) => (light ? 'rgba(0,0,0,0.5)' : 'none')};
`;
