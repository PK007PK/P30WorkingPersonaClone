import styled from "styled-components"
import SectionLayout from "../../../utilities/SectionLayout/SectionLayout"

export const StyledSectionLayout = styled(SectionLayout)`
  * {
    ${({ theme }) => theme.media.lgAbove} {
      width: 90%;
    }
  }

  p {
    margin-top: 20px;
  }

  h2 {
    margin: 40px 0 20px 0;
  }
  img {
    margin: 20px 0;
  }

  li {
    margin: 10px 0;
    list-style-type: circle;
    margin-left: 20px;
  }
`
