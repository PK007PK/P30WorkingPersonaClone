import styled from 'styled-components';
import SectionLayout from '../../utils/SectionLayout/SectionLayout';

export const StyledSectionLayout = styled(SectionLayout)`
  .contactWrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${({ theme }) => theme.media.mdAbove} {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  h2 {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  .formWrap {
    ${({ theme }) => theme.media.lgAbove} {
      padding-right: 150px;
    }
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: flex-start;

    ${({ theme }) => theme.media.mdAbove} {
      margin-top: 0px;
      align-items: flex-end;
    }

    & > * {
      margin-bottom: 20px;
    }

    h2 {
      margin-bottom: 24px;
    }
  }
`;
