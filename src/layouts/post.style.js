import styled from 'styled-components';
import ImgPlaceholder from '../components/ImgPlaceholder/ImgPlaceholder';
import SectionLayout from '../utils/SectionLayout/SectionLayout';

export const StyledImgPlaceholder = styled(ImgPlaceholder)`
  width: 100vw;
  height: 50vh;
  ${({ theme }) => theme.media.mdAbove} {
    width: 50vw;
  }

  ${({ theme }) => theme.media.lgAbove} {
    width: 40vw;
    height: 400px;
  }

  ${({ theme }) => theme.media.xlAbove} {
    width: 700px;
    height: 400px;
  }
`;

export const StyledSectionLayout = styled(SectionLayout)`
  position: relative;

  .headingWrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column-reverse;

    ${({ theme }) => theme.media.mdAbove} {
      flex-direction: row-reverse;
      margin-bottom: 50px;
    }
  }

  .textWrapper {
    width: 100%;

    ${({ theme }) => theme.media.mdAbove} {
      width: 45%;
      /* padding: 60px 0; */
    }

    ${({ theme }) => theme.media.lgAbove} {
      /* padding: 90px 0; */
    }

    h1 {
      font-weight: 300;
      font-size: 50px;
      line-height: 1.4;
      color: ${({ theme }) => theme.color.deepBlue};
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }

    div {
      margin-top: 20px;
      display: flex;
      align-items: center;
    }

    .author,
    .date {
      font-size: 14px;
      font-weight: ${({ theme }) => theme.fontWeight.regular};
    }

    .date {
      margin-left: 40px;
    }

    .date:first-child {
      margin-left: 0px;
    }
  }

  .imgWrapper {
    /* width: 100%; */

    ${({ theme }) => theme.media.smAbove} {
      /* width: 50%; */
    }

    .image {
      width: 100vw;
      height: 50vh;
      ${({ theme }) => theme.media.mdAbove} {
        width: 50vw;
      }

      ${({ theme }) => theme.media.lgAbove} {
        width: 40vw;
        height: 400px;
      }

      ${({ theme }) => theme.media.xlAbove} {
        width: 700px;
        height: 400px;
      }
    }
  }
`;
