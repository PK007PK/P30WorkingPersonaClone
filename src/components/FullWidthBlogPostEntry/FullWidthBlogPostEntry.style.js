import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"

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

export const StyledImgWrapper = styled.div`
  display: block;
  width: 100%;
  height: 250px;
  position: relative;
  margin: 0;
  margin-bottom: 20px;
  overflow: hidden;
  flex-shrink: 0;

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

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 450px;

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
      height: 2320px;
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

export const StyledTxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 40px;

  ${({ theme }) => theme.media.xsAbove} {
    max-width: 50%;
    margin: 15px 0 15px 30px;
  }
`

export const StyledDate = styled.span`
  margin-bottom: 20px;
`

export const StyledTitle = styled.h3`
  font-size: 25px;
  display: block;
`
