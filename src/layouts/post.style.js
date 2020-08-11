import styled from "styled-components"

import SectionLayout from "../utilities/SectionLayout/SectionLayout"

export const StyledSectionLayout = styled(SectionLayout)`
  position: relative;

  .headingWrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: column;

    ${({ theme }) => theme.media.smAbove} {
      flex-direction: row-reverse;
      margin-bottom: 50px;
    }
  }

  .textWrapper {
    width: 100%;
    /* background-color: red; */
    padding: 30px 0;

    ${({ theme }) => theme.media.smAbove} {
      width: 45%;
      padding: 60px 0;
    }

    ${({ theme }) => theme.media.lgAbove} {
      padding: 90px 0;
    }

    h1 {
      font-weight: 300;
      font-size: 50px;
      line-height: 50px;
      color: ${({ theme }) => theme.color.deepBlue};
    }

    div {
      margin-top: 20px;
      display: flex;
      align-items: center;
    }

    .author,
    .date {
      font-size: 12px;
    }

    .date {
      margin-left: 40px;
    }
  }

  .imgWrapper {
    width: 100%;

    ${({ theme }) => theme.media.smAbove} {
      width: 50%;
    }

    .image {
      height: 50vh;

      ${({ theme }) => theme.media.mdAbove} {
        height: 40vh;
        min-height: 450px;
      }

      ${({ theme }) => theme.media.lgAbove} {
        height: 55vh;
      }
    }
  }

  .mainPostBody {
    color: ${({ theme }) => theme.color.deepBlue};

    h2 {
      margin-top: 30px;

      ${({ theme }) => theme.media.lgAbove} {
        width: 70%;
      }
    }

    p {
      margin-top: 20px;

      ${({ theme }) => theme.media.lgAbove} {
        width: 80%;
      }
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
    }
  }
`
