import styled from "styled-components"
import SectionLayout from "../../../utilities/SectionLayout/SectionLayout"

export const StyledSectionLayout = styled(SectionLayout)`
  padding-top: 0;

  .innerContainer {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;

    ${({ theme }) => theme.media.mdAbove} {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  h2 {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  .formWrapper {
    flex-grow: 1;
    p {
      font-size: ${({ theme }) => theme.fontSize.md};
    }
  }

  .txtWrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 70px;

    ${({ theme }) => theme.media.xsAbove} {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }

    ${({ theme }) => theme.media.mdAbove} {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 0 100px;
    }

    ${({ theme }) => theme.media.lgAbove} {
      margin: 0 120px;
    }

    ${({ theme }) => theme.media.xlAbove} {
      margin: 0 0 0 200px;
    }

    > * {
      margin: 15px 0;
    }

    h2 {
      margin: 0 0 20px 0;
    }
  }
`
