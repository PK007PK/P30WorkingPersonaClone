import styled from "styled-components"

import SectionLayout from "../../utilities/SectionLayout/SectionLayout"
import FullWidthBlogPostEntry from "../../components/FullWidthBlogPostEntry/FullWidthBlogPostEntry"

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const StyledFullWidthBlogPostEntry = styled(FullWidthBlogPostEntry)`
  margin: 15px 0;
`

export const StyledSectionLayout = styled(SectionLayout)`
  /* background-color: ${({ theme }) => theme.color.active}; */
  position: relative;
`

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
