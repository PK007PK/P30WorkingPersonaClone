import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"

import YouTubeIcon from "../../components/IconYT/IconYT"

export const StyledWrapper = styled(Link)`
  display: block;
  width: 100%;
  height: 450px;
  position: relative;
  margin: 0;
  margin-bottom: 20px;
  overflow: hidden;
/* 
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
    flex-grow: 1;
  }

  ${({ theme }) => theme.media.xlAbove} {
    height: 450px;
    width: 370px;
    flex-grow: 1;
  } */

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

    /* ${({ theme }) => theme.media.xsAbove} {
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
    } */
  }
`

export const StyledYouTubeIcon = styled(YouTubeIcon)`
  position: absolute;
  right: 20px;
  top: 20px;
`

export const StyledImg = styled(Image)`
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`

export const StyledDate = styled.span`
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xs};
  position: absolute;
  display: block;
  top: 15px;
  left: 15px;
  padding: 5px 15px;
  z-index: 3;
`

export const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.color.white};
  line-height: ${({ theme }) => theme.lineHeight.regular};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  position: absolute;
  bottom: 30px;
  width: 95%;
  left: 15px;
  z-index: 3;
`
