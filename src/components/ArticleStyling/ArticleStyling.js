import styled from 'styled-components';

const ArticleStyling = styled.div`
  h2 {
    margin-top: 50px;
    margin-bottom: 25px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  p {
    margin-top: 20px;
    /* text-align: justify; */
  }

  ul {
    margin-bottom: 40px;
  }

  p:first-child {
    margin-top: 0px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  li {
    margin: 10px 0;
    list-style-type: disc;
    margin-left: 20px;
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

  blockquote {
    margin-top: 40px;
    margin-bottom: 40px;

    p {
      font-weight: ${({ theme }) => theme.fontWeight.regular} !important;
      font-style: italic;
      line-height: 2;
      background: #f9f9f9;
      border-left: 10px solid #ccc;
      padding: 0.5em 20px;
    }
  }
`;

export default ArticleStyling;
