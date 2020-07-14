import styled from "styled-components"

import SectionLayout from "../../../utilities/SectionLayout/SectionLayout"

export const StyledSectionLayout = styled(SectionLayout)`
  position: relative;

  color: white;
  background-color: ${({ theme }) => theme.color.deepBlue};

  h2 {
    color: ${({ theme }) => theme.color.milkWhite};
  }

  h3 {
    color: ${({ theme }) => theme.color.carrot};
  }
`

export const ServicesWrapper = styled.div`
  ${({ theme }) => theme.media.mdAbove} {
    display: flex;
  }
`

export const LeadBlock = styled.div`
  ${({ theme }) => theme.media.mdAbove} {
    width: 40%;
    margin-right: 30px;
  }
`

export const ServicesBlock = styled.ul`
  ${({ theme }) => theme.media.smAbove} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  ${({ theme }) => theme.media.mdAbove} {
    width: 60%;
  }
`

export const Service = styled.li`
  margin-bottom: 20px;

  :nth-last-of-type(-n + 2) {
    margin-bottom: 0px;
  }

  ${({ theme }) => theme.media.smAbove} {
    width: 45%;
  }
`
