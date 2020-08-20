import styled from "styled-components"
import Image from "gatsby-image"

import Button from "../../Button/Button"

export const StyledSection = styled.section`
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 100px;

  ${({ theme }) => theme.media.xsAbove} {
    height: 800px;
  }

  ${({ theme }) => theme.media.smAbove} {
    min-height: 700px;
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

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    line-height: 80px;
    text-align: right;
    letter-spacing: -5px;
  }

  .lead {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: right;
    max-width: 70%;
  }

  .description {
    text-align: right;
    display: block;
    max-width: 600px;
  }

  .buttonWrapper {
    display: flex;
    margin-top: 20px;
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
    width: calc(25vh);
    margin-top: 20px;
    @media (orientation: landscape) {
      margin-top: -100px;
      object-fit: none;
      height: calc(100vh + 100px);
      width: calc(50vh + 50px);
    }
  }
`
