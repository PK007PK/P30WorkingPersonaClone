import styled from 'styled-components';

export const SocialShareStyle = styled.div`
  display: flex;
  justify-content: space-between;

  & > * {
    margin-left: 10px;
  }

  .social__button:hover:not(:active) {
    opacity: 0.75;
  }
`;
