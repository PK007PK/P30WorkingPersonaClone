import styled from 'styled-components';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

import YouTubeIcon from '../IconYT/IconYT';

export const StyledLink = styled(Link)`
  transition: ${({ theme }) => theme.transition.custom};
  box-shadow: ${({ theme }) => theme.elevation.dp1};
  display: flex;
  padding: 20px;
  margin: 20px 0;
  flex-direction: column;

  ${({ theme }) => theme.media.xsAbove} {
    flex-direction: row;
    align-items: center;
  }

  :hover {
    box-shadow: ${({ theme }) => theme.elevation.dp8};
    background-color: ${({ theme }) => theme.color.active};
    color: white;
  }
  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: ${({ theme }) => theme.elevation.dp8};
    background-color: ${({ theme }) => theme.color.active};
    color: white;
  }
`;

export const StyledYouTubeIcon = styled(YouTubeIcon)`
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const StyledImgWrapper = styled.div`
  display: block;
  position: relative;
  margin: 0px;
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
`;

export const StyledImg = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const StyledTxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 70px;
  ${({ theme }) => theme.media.xsAbove} {
    margin: 15px 0 50px 30px;
  }
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
`;

export const StyledTitle = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 40px;
  display: block;

  ${({ theme }) => theme.media.lgAbove} {
    width: 80%;
  }
`;
