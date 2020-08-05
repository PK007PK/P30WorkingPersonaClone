import SectionLayout from "../../utilities/SectionLayout/SectionLayout"
import styled from "styled-components"

export const StyledSectionLayout = styled(SectionLayout)`
  color: ${({ theme }) => theme.color.milkWhite};
  background-color: ${({ theme }) => theme.color.deepBlue};
  padding-top: 20px;
  padding-bottom: 20px;
  color: white;
`

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.smAbove} {
    justify-content: space-between;
    flex-direction: row;
  }

  ${({ theme }) => theme.media.smBelow} {
    a {
      font-weight: bold;
      text-align: center;
    }

    p {
      margin-top: 15px;
    }
  }
`
