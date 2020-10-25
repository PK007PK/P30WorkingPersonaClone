import styled from 'styled-components';
import Image from 'gatsby-image';

import Button from '../../components/Button/Button';

const sectionHeight = {
  base: `100vh`,
  xs: `800px`,
  sm: `800px`,
  smLandscape: `calc(100vh - 98px + 50px)`,
  md: `700px`,
  mdLandscape: `700px`,
  lg: `700px`,
  lgLandscape: `calc(100vh - 98px + 50px)`,
  xxl: `calc(100vh - 98px + 50px)`,
};

const heroImgSizes = {
  md: {
    height: `735px`,
    width: `489px`,
  },
  mdLandscape: `(100vh - 98px + 70px)`,
  lg: {
    height: `calc(700px)`,
    width: `calc((700px) * 0.666)`,
  },
  lgLandscape: {
    height: `calc(100vh - 98px + 120px)`,
    width: `calc((100vh - 98px + 120px) * 0.666)`,
  },
  xxl: `(100vh - 98px + 50px)`,
};

export const StyledSection = styled.section`
  height: ${sectionHeight.base};
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 100px;

  ${({ theme }) => theme.media.xsAbove} {
    height: ${sectionHeight.xs};
  }

  ${({ theme }) => theme.media.smAbove} {
    height: ${sectionHeight.sm};
    background-image: none;
    display: flex;
    align-items: flex-end;
    position: relative;
    padding-bottom: 0px;

    @media (orientation: landscape) {
      height: ${sectionHeight.smLandscape};
    }
  }

  ${({ theme }) => theme.media.mdAbove} {
    height: ${sectionHeight.md};

    @media (orientation: landscape) {
      height: ${sectionHeight.mdLandscape};
    }
  }

  ${({ theme }) => theme.media.lgAbove} {
    height: ${sectionHeight.lg};

    @media (orientation: landscape) {
      height: ${sectionHeight.lgLandscape};
    }
  }

  ${({ theme }) => theme.media.xlAbove} {
    height: ${sectionHeight.xl};
  }
`;

export const StyledTxtWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;

  ${({ theme }) => theme.media.smAbove} {
    width: 100%;
    padding-right: 40px;
  }

  ${({ theme }) => theme.media.mdAbove} {
    width: 60%;
  }

  ${({ theme }) => theme.media.lgAbove} {
    padding-right: 60px;
    width: 65%;
    padding-bottom: 100px;
  }

  ${({ theme }) => theme.media.xlAbove} {
    padding-right: 360px;
    width: 65%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .subtitle {
    font-weight: 200;
    font-size: 5rem;
    line-height: 1.5;
    text-align: right;
    font-family: 'Lobster';
  }

  .subtitle2 {
    font-weight: 200;
    font-size: 4rem;
    line-height: 1.5;
    text-align: right;
  }

  h1 {
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: right;
    font-size: 4.5rem;
  }

  .buttonWrapper {
    display: flex;
    margin-top: 40px;
    flex-direction: row;
    flex-wrap: nowrap;

    button {
      margin-left: 10px;
    }
  }

  a {
    :focus {
      outline: none;
      border: none;
      background-color: ${({ theme }) => theme.color.secondaryButton};
      box-shadow: 5px 5px 0px ${({ theme }) => theme.color.mainButton};
    }
  }
`;
export const StyledButton = styled(Button)`
  margin-left: 10px;
`;

export const StyledImage = styled(Image)`
  display: none;

  ${({ theme }) => theme.media.mdAbove} {
    display: flex;
    z-index: -10;
    flex-shrink: 0;
    height: ${heroImgSizes.md.height};
    width: ${heroImgSizes.md.width};

    @media (orientation: landscape) {
      margin-top: -70px;
      margin-right: 40px;
    }
  }

  ${({ theme }) => theme.media.lgAbove} {
    height: ${heroImgSizes.lg.height};
    width: ${heroImgSizes.lg.width};
    margin-right: 5vw;

    @media (orientation: landscape) {
      height: ${heroImgSizes.lgLandscape.height};
      width: ${heroImgSizes.lgLandscape.width};
    }
  }

  ${({ theme }) => theme.media.xlAbove} {
    margin-right: 8vw;
  }
`;
