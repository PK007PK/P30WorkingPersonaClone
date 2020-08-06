import styled from "styled-components"
import { Link } from "gatsby"

import SectionLayout from "../../../utilities/SectionLayout/SectionLayout"

export const StyledSectionLayout = styled(SectionLayout)`
  position: relative;
  background-color: ${({ theme }) => theme.color.blue};
`

export const StyledCarouselWrapper = styled.div`
  display: flex;
  height: 450px;
`

export const ArrowContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const SwiperContainer = styled.div`
  overflow: hidden;
  width: 90%;
`

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.color.carrot};
  color: ${({ theme }) => theme.color.milkWhite};
  padding: 10px 20px;
  transition: all 0.3s;

  :hover {
    background-color: ${({ theme }) => theme.color.deepBlue};
    color: ${({ theme }) => theme.color.milkWhite};
  }
`
