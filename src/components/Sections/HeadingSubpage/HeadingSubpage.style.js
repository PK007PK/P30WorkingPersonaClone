import styled from "styled-components"
import Image from "gatsby-image"

export const StyledSection = styled.section`
  height: calc(70vh);
  background-size: cover;
  background-repeat: no-repeat;

  ${({ theme }) => theme.media.xsAbove} {
    height: 50vh;
  }

  ${({ theme }) => theme.media.smAbove} {
    height: 40vh;
  }

  ${({ theme }) => theme.media.mdAbove} {
    height: 600px;
    display: flex;
    position: relative;

    @media (orientation: landscape) {
      max-height: calc(80vh - 98px + 50px);
    }
  }
`

export const StyledTxtWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  ${({ theme }) => theme.media.mdAbove} {
    width: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  h1 {
    font-weight: 300;
    font-size: 50px;
    line-height: 50px;
    color: ${({ theme }) => theme.color.deepBlue};
    margin: 20px 0;
  }

  .slug {
    color: ${({ theme }) => theme.color.pink};
    font-weight: 700;
  }

  .description {
    font-size: 16px;
    display: block;
    max-width: 95%;
    color: ${({ theme }) => theme.color.deepBlue};
  }
`

export const StyledImageWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.media.mdAbove} {
    display: block;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`

export const StyledImage = styled(Image)`
  display: none;

  ${({ theme }) => theme.media.mdAbove} {
    display: block;
    width: 400px;
    object-fit: contain;
    border: 1px solid gray;
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${({ theme }) => theme.media.lgAbove} {
    width: 500px;
  }
`
export const StyledDiv = styled.div`
  display: none;

  ${({ theme }) => theme.media.mdAbove} {
    display: block;
    position: absolute;
    top: 40%;
    left: 40%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 300px;
    border: 16px solid rgba(0, 0, 0, 0.2);
  }

  ${({ theme }) => theme.media.lgAbove} {
    width: 500px;
    height: 370px;
    border: 20px solid rgba(0, 0, 0, 0.2);
  }
`
