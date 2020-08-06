import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"

export const StyledWrapper = styled(Link)`
  display: block;
  width: 100%;
  height: 450px;
  position: relative;
  margin: 0;
  margin-bottom: 20px;
  overflow: hidden;

  ${({ theme }) => theme.media.xsAbove} {
    height: 450px;
    width: 250px;
  }

  ${({ theme }) => theme.media.smAbove} {
    height: 450px;
    width: 330px;
  }

  ${({ theme }) => theme.media.mdAbove} {
    height: 450px;
    width: 300px;
  }

  ${({ theme }) => theme.media.lgAbove} {
    height: 450px;
    width: 350px;
  }

  ${({ theme }) => theme.media.xlAbove} {
    height: 450px;
    width: 370px;
  }

  &:hover ::after {
    background: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 450px;
    background: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 50%);
    z-index: 2;
    transition: all 0.3s;

    ${({ theme }) => theme.media.xsAbove} {
      height: 450px;
      width: 250px;
    }

    ${({ theme }) => theme.media.smAbove} {
      height: 450px;
      width: 330px;
    }

    ${({ theme }) => theme.media.mdAbove} {
      height: 450px;
      width: 300px;
    }

    ${({ theme }) => theme.media.lgAbove} {
      height: 450px;
      width: 350px;
    }

    ${({ theme }) => theme.media.xlAbove} {
      height: 450px;
      width: 370px;
    }
  }
`

export const StyledImg = styled(Image)`
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
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xs};
  z-index: 3;
`

export const StyledTitle = styled.h3`
  position: absolute;
  bottom: 30px;
  width: 95%;
  left: 15px;
  line-height: 30px;
  z-index: 3;
  transition: all 0.3s;
  color: ${({ theme }) => theme.color.white};
`
