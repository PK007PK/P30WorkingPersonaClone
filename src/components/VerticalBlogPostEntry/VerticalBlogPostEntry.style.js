import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"

import YouTubeIcon from "../../components/IconYT/IconYT"

export const StyledContainer = styled(Link)`
  transition: ${({ theme }) => theme.transition.custom};
  box-shadow: ${({ theme }) => theme.elevation.dp1};
  display: flex;
  position: relative;
  margin-bottom: 120px;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding: 10px;

  ${({ theme }) => theme.media.mdAbove} {
    width: 46%;
  }

  :hover {
    box-shadow: ${({ theme }) => theme.elevation.dp8};
    background-color: ${({ theme }) => theme.color.active};
    color: ${({ theme }) => theme.color.white};
  }

  :focus {
    outline: none;
    border: none;
    box-shadow: ${({ theme }) => theme.elevation.dp8};
    background-color: ${({ theme }) => theme.color.active};
    color: ${({ theme }) => theme.color.white};
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

  h3 {
    margin: 20px 0;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
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
