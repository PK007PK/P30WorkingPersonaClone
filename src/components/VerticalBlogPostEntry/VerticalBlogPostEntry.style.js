import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"

import YouTubeIcon from "../../components/IconYT/IconYT"

export const StyledContainer = styled(Link)`
  display: flex;
  position: relative;
  transition: all 0.3s;
  margin-bottom: 120px;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding: 10px;

  ${({ theme }) => theme.media.mdAbove} {
    width: 46%;
  }

  :hover {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.color.lightBlue};
  }

  .date {
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.fontSize.xs};
    position: absolute;
    display: block;
    top: 25px;
    left: 25px;
    padding: 5px 15px;
    z-index: 3;
  }

  .title {
    margin: 20px 0;
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`

export const StyledImg = styled(Image)`
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 230px;
  z-index: 1;
`

export const StyledYouTubeIcon = styled(YouTubeIcon)`
  position: absolute;
  right: 30px;
  top: 30px;
`
