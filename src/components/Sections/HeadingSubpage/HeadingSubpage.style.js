import styled from "styled-components"
import Image from "gatsby-image"

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
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  width: 50%;

  /* ${({ theme }) => theme.media.smAbove} {
    width: 50%;
    padding-right: 40px;
  } */

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
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const StyledImage = styled(Image)`
  display: none;
  object-fit: contain;
  border: 1px solid gray;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${({ theme }) => theme.media.smAbove} {
    display: block;
    width: 500px;
  }
`
export const StyledDiv = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 358px;
  border: 20px solid rgba(0, 0, 0, 0.2);
`
