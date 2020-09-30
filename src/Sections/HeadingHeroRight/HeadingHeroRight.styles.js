import styled from "styled-components"
import Image from "gatsby-image"

import Button from "../../components/Button/Button"

export const StyledSection = styled.section`
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  /* padding-bottom: 100px; */

  ${({ theme }) => theme.media.xsAzbove} {
    height: 800px;
  }

  ${({ theme }) => theme.media.smAbove} {
    height: 700px;
    background-image: none;
    display: flex;
    position: relative;
    padding-bottom: 0px;

    @media (orientation: landscape) {
      height: calc(100vh - 98px + 50px);
    }
  }
`

export const StyledTxtWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;

  ${({ theme }) => theme.media.smAbove} {
    width: 100%;
    padding-right: 40px;
  }

  ${({ theme }) => theme.media.mdAbove} {
    width: 60%;
  }

  ${({ theme }) => theme.media.lgAbove} {
    padding-right: 60px;
    width: 65%;
    padding-bottom: 100px;
  }

  ${({ theme }) => theme.media.xlAbove} {
    padding-right: 360px;
    width: 65%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .subtitle {
    font-weight: 200;
    font-size: 30px;
    line-height: 1.5;
    text-align: right;
  }

  h1 {
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: right;
  }

  .buttonWrapper {
    display: flex;
    margin-top: 40px;
    flex-direction: row;
    flex-wrap: nowrap;

    button {
      margin-left: 10px;
    }
  }
`
export const StyledButton = styled(Button)`
  margin-left: 10px;
`

export const StyledImage = styled(Image)`
  display: none;

  ${({ theme }) => theme.media.mdAbove} {
    display: block;
    height: calc(50vh);
    width: calc(50vw);
    margin-top: 20px;
    @media (orientation: landscape) {
      /* margin-top: -70px; */
      margin-right: 50px;
      object-fit: none;
      /* height: calc(100vh ); */
      width: calc(50vh + 250px);
    }
  }

  /* ${({ theme }) => theme.media.lgAbove} {
    height: calc(100vh + 50px);
    width: calc(50vh + 250px);
  } */
`
