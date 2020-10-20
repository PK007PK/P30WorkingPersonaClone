import { createGlobalStyle } from 'styled-components';

const Links = createGlobalStyle`
  a {
    color: inherit;
    text-decoration: none;

    &.decorated {
        text-decoration: underline;
        color: ${({ theme }) => theme.color.active};
    }
  }

  
`;

export default Links;
