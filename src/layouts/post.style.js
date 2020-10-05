import styled from "styled-components"

import SectionLayout from "../utilities/SectionLayout/SectionLayout"

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
    /* background-color: red; */
    /* padding: 30px 0; */

    ${({ theme }) => theme.media.mdAbove} {
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
  }

  .imgWrapper {
    /* width: 100%; */

    ${({ theme }) => theme.media.smAbove} {
      /* width: 50%; */
    }

    .image {
      width: 100vw;
      /* height: calc(100vw / 16 * 9);  */
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

  .mainPostBody {
    p,
    h2,
    img,
    li {
      ${({ theme }) => theme.media.lgAbove} {
        /* width: 75%; */
      }
    }

    h2 {
      margin-top: 30px;
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }

    p {
      margin-top: 20px;
      text-align: justify;
    }

    p:first-child {
      margin-top: 0px;
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

    .buttons {
      & > * {
        margin-bottom: 20px;
      }
    }
    .socials {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
    }
  }
`

export const StyledPostNavigation = styled.div`
  margin: 50px 0;
  ${({ theme }) => theme.media.lgAbove} {
    width: 90%;
  }
  li {
    margin-bottom: 10px;
    transition: all 0.5s;
    text-align: right;

    :hover {
      color: ${({ theme }) => theme.color.pink};
    }
  }
`
