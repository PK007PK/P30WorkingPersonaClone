import styled from "styled-components"
import SectionLayout from "../../../utilities/SectionLayout/SectionLayout"

export const StyledSectionLayout = styled(SectionLayout)`
  * {
    ${({ theme }) => theme.media.lgAbove} {
      width: 80%;
    }
  }

  p {
    margin-top: 20px;
  }

  li {
    margin: 10px 0;
    list-style-type: circle;
    margin-left: 20px;
  }
`
