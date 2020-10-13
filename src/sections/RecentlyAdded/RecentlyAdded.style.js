import styled from 'styled-components';

import SectionLayout from '../../utils/SectionLayout/SectionLayout';
import CardFullWidthBlogPostEntry from '../../components/CardFullWidthBlogEntry/CardFullWidthBlogEntry';

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledCardFullWidthBlogPostEntry = styled(
  CardFullWidthBlogPostEntry
)``;

export const StyledSectionLayout = styled(SectionLayout)`
  /* background-color: ${({ theme }) => theme.color.active}; */
  position: relative;
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
