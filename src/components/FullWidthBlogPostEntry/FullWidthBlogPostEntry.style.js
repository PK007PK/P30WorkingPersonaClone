import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"

import YouTubeIcon from "../../components/IconYT/IconYT"

export const StyledContainer = styled(Link)`
  display: flex;
  transition: all 0.3s;
  margin: 20px 0;
  flex-direction: column;

  ${({ theme }) => theme.media.xsAbove} {
    flex-direction: row;
  }

  :hover {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.color.blue};
  }
`

export const StyledYouTubeIcon = styled(YouTubeIcon)`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 35px;
  height: 35px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 4;
`

export const StyledImgWrapper = styled.div`
  display: block;
  position: relative;
  margin: 0;
  margin-bottom: 20px;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: 250px;

  ${({ theme }) => theme.media.xsAbove} {
    height: 180px;
    width: 250px;
  }

  ${({ theme }) => theme.media.smAbove} {
    height: 230px;
    width: 330px;
  }

  ${({ theme }) => theme.media.mdAbove} {
    height: 210px;
    width: 300px;
  }

  ${({ theme }) => theme.media.lgAbove} {
    height: 230px;
    width: 350px;
  }

  ${({ theme }) => theme.media.xlAbove} {
    height: 230px;
    width: 370px;
  }
`

export const StyledImg = styled(Image)``

export const StyledTxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 70px;

  ${({ theme }) => theme.media.xsAbove} {
    margin: 15px 0 50px 30px;
  }
`

export const StyledDate = styled.span`
  position: absolute;
  display: block;
  top: 15px;
  left: 15px;
  padding: 5px 15px;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xs};
  z-index: 3;
`

export const StyledTitle = styled.h3`
  font-weight: 300;
  font-size: 25px;
  line-height: 40px;
  color: ${({ theme }) => theme.color.deepBlue};
  display: block;

  ${({ theme }) => theme.media.lgAbove} {
    width: 80%;
  }
`
