import styled from "styled-components"
import SectionLayout from "../../../utilities/SectionLayout/SectionLayout"

export const StyledSectionLayout = styled(SectionLayout)`
  p {
    color: ${({ theme }) => theme.color.deepBlue};
    padding-bottom: 20px;

    ${({ theme }) => theme.media.lgAbove} {
      width: 80%;
    }
  }
`
