import styled from "styled-components"
import Image from "gatsby-image"

import Button from "../../Button/Button"

export const StyledButton = styled(Button)`
  margin-left: 10px;
`

export const StyledSection = styled.section`
  height: calc(100vh - 70px + 50px);
  background-size: cover;
  background-repeat: no-repeat;

  ${({ theme }) => theme.media.xsAbove} {
    max-height: 800px;
  }

  ${({ theme }) => theme.media.smAbove} {
    max-height: 700px;
    background-image: none;
    display: flex;
    position: relative;

    @media (orientation: landscape) {
      max-height: calc(100vh - 98px + 50px);
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
    width: 65%;
    padding-right: 40px;
  }

  ${({ theme }) => theme.media.mdAbove} {
    width: 60%;
  }

  ${({ theme }) => theme.media.lgAbove} {
    padding-right: 60px;
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

export const StyledImage = styled(Image)`
  display: none;
  object-fit: contain;

  ${({ theme }) => theme.media.smAbove} {
    display: block;
    margin-top: -98px;
    width: 35%;
  }

  ${({ theme }) => theme.media.mdAbove} {
    display: block;
    width: 40%;
  }

  ${({ theme }) => theme.media.lgAbove} {
    display: block;
    width: 35%;
  }
`
