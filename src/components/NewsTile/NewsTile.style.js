import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"

export const StyledWrapper = styled(Link)`
  display: block;
  width: 100%;
  height: 350px;
  position: relative;
  margin: 0;
  margin-bottom: 20px;
  overflow: hidden;

  ${({ theme }) => theme.media.xsAbove} {
    height: 330px;
    width: 250px;
  }

  ${({ theme }) => theme.media.smAbove} {
    height: 330px;
    width: 330px;
  }

  ${({ theme }) => theme.media.mdAbove} {
    height: 300px;
    width: 300px;
  }

  ${({ theme }) => theme.media.lgAbove} {
    height: 350px;
    width: 350px;
  }

  ${({ theme }) => theme.media.xlAbove} {
    height: 370px;
    width: 370px;
  }

  @keyframes example {
    from {
      top: 350px;
    }
    to {
      top: 0px;
    }
  }

  &:hover p {
    animation-name: example;
    animation-duration: 0.4s;
    top: 0px;
  }

  &:hover span {
    opacity: 0;
  }

  &:hover h3 {
    opacity: 0;
  }

  &:hover ::after {
    opacity: 0;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 350px;
    background: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 43.94%);
    z-index: 2;
    transition: all 0.3s;

    ${({ theme }) => theme.media.xsAbove} {
      height: 330px;
      width: 250px;
    }

    ${({ theme }) => theme.media.smAbove} {
      height: 330px;
      width: 330px;
    }

    ${({ theme }) => theme.media.mdAbove} {
      height: 300px;
      width: 300px;
    }

    ${({ theme }) => theme.media.lgAbove} {
      height: 350px;
      width: 350px;
    }

    ${({ theme }) => theme.media.xlAbove} {
      height: 370px;
      width: 370px;
    }
  }
`

export const StyledTxt = styled.p`
  position: absolute;
  display: block;
  top: 300;
  left: 0px;
  padding: 15px;
  padding-top: 150px;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: black;
  color: white;
`

export const StyledImg = styled(Image)`
  /* background-image: url(${({ background }) => background}); */
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`

export const StyledDate = styled.span`
  position: absolute;
  display: block;
  top: 15px;
  left: 15px;
  padding: 5px 15px;
  transition: all 0.3s;
  background-color: ${({ theme }) => theme.color.lightBlue};
  font-size: ${({ theme }) => theme.fontSize.xs};
  z-index: 3;
`

export const StyledTitle = styled.h3`
  position: absolute;
  bottom: 30px;
  left: 15px;
  z-index: 3;
  transition: all 0.3s;
  color: ${({ theme }) => theme.color.white};
`
