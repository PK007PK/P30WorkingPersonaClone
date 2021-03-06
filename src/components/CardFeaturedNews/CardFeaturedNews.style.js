import styled from 'styled-components';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

import YouTubeIcon from '../IconYT/IconYT';

export const StyledWrapper = styled(Link)`
  display: block;
  width: 100%;
  height: 450px;
  position: relative;
  margin: 0;
  margin-bottom: 20px;
  overflow: hidden;
  transition: ${({ theme }) => theme.transition.custom};
  box-shadow: ${({ theme }) => theme.elevation.dp1};

  &:hover {
    box-shadow: ${({ theme }) => theme.elevation.dp8};
  }

  :focus {
    outline: none;
    border: none;
    box-shadow: ${({ theme }) => theme.elevation.dp8};
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 450px;
    background: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 50%);
    z-index: 2;
    transition: ${({ theme }) => theme.transition.custom};
  }
`;

export const StyledYouTubeIcon = styled(YouTubeIcon)`
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const StyledImg = styled(Image)`
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

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
`;

export const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.color.white};
  /* line-height: ${({ theme }) => theme.lineHeight.regular}; */
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-shadow: ${({ theme }) => theme.txtShadow};
  position: absolute;
  bottom: 30px;
  width: calc(100% - 40px);
  left: 20px;
  z-index: 3;
`;
