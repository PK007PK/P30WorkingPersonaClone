import styled from 'styled-components';
import SectionLayout from'../../utils/SectionLayout/SectionLayout'';

export const StyledSectionLayout = styled(SectionLayout)`
  padding-bottom: 200px;
  p,
  h2,
  img,
  li {
    ${({ theme }) => theme.media.lgAbove} {
      width: 75%;
    }
  }

  p {
    margin-top: 20px;
    text-align: justify;
  }

  h2 {
    margin: 40px 0 20px 0;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
  img {
    margin: 20px 0;
  }

  li {
    margin: 10px 0;
    list-style-type: circle;
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
  };
`;
