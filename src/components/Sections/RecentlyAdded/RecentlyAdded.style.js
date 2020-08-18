import styled from "styled-components"
import { Link } from "gatsby"

import SectionLayout from "../../../utilities/SectionLayout/SectionLayout"
import FullWidthBlogPostEntry from "../../FullWidthBlogPostEntry/FullWidthBlogPostEntry"
import Button from "../../Button/Button"

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const StyledFullWidthBlogPostEntry = styled(FullWidthBlogPostEntry)`
  margin: 15px 0;
`

export const StyledSectionLayout = styled(SectionLayout)`
  background-color: ${({ theme }) => theme.color.lightBlue};
  position: relative;
`

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
