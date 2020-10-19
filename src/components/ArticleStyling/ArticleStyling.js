import styled from 'styled-components';
import quotes from '../../assets/icons/quotes.svg';

const ArticleStyling = styled.div`
  h2 {
    margin-top: 50px;
    margin-bottom: 25px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  p {
    margin-top: 20px;
  }

  ul {
    margin-bottom: 40px;
  }

  li {
    margin: 10px 0;
    list-style-type: disc;
    margin-left: 20px;
  }

  blockquote {
    margin-top: 40px;
    margin-bottom: 40px;

    p {
      display: block;
      font-weight: ${({ theme }) => theme.fontWeight.regular} !important;
      font-style: italic;
      line-height: 2;
      background: #f9f9f9;
      border-left: 10px solid #ccc;
      padding: 0.5em 20px;
    }
  }

  p,
  li,
  h1,
  h2,
  strong,
  a {
    ::selection {
      background-color: ${({ theme }) => theme.color.active};
      color: white;
    }
  }

  .lead {
    margin-top: 40px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    ${({ theme }) => theme.media.mdAbove} {
      margin-top: 0px;
    }
  }

  .articleImg {
    margin: 20px 0;

    ${({ theme }) => theme.media.mdAbove} {
      width: 50%;
      height: 40vh;
    }

    ${({ theme }) => theme.media.lgAbove} {
      height: 55vh;
    }
  }
`;

export default ArticleStyling;
