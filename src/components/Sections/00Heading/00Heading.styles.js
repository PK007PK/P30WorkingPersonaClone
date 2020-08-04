import styled from "styled-components"
import Image from "gatsby-image"

import Button from "../../Button/Button"

export const StyledButton = styled(Button)`
  margin-left: 10px;
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
    width: 35%;
  }
`

export const StyledSection = styled.section`
  height: calc(100vh - 70px);
  background-size: cover;
  background-repeat: no-repeat;

  ${({ theme }) => theme.media.xsAbove} {
    max-height: 800px;
  }

  ${({ theme }) => theme.media.smAbove} {
    max-height: 540px;
    background-image: none;
    display: flex;
    position: relative;

    @media (orientation: landscape) {
      max-height: calc(100vh - 98px);
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
    text-align: right;

    font-weight: 800;
    font-size: 80px;
    line-height: 80px;
    letter-spacing: -5px;
    color: ${({ theme }) => theme.color.deepBlue};
  }

  .lead {
    font-size: 36px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .description {
    font-size: 16px;
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
