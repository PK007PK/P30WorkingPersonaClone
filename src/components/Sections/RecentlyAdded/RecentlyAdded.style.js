import styled from "styled-components"
import { Link } from "gatsby"

import SectionLayout from "../../../utilities/SectionLayout/SectionLayout"
import FullWidthBlogPostEntry from "../../FullWidthBlogPostEntry/FullWidthBlogPostEntry"
import Button from "../../Button/Button"

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const StyledButton = styled(Button)`
  width: 260px;
`

export const StyledFullWidthBlogPostEntry = styled(FullWidthBlogPostEntry)`
  margin: 15px 0;
`

export const StyledSectionLayout = styled(SectionLayout)`
  position: relative;
  background-color: ${({ theme }) => theme.color.lightBlue};
`

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.color.carrot};
  color: ${({ theme }) => theme.color.milkWhite};
  padding: 10px 20px;
  transition: all 0.3s;
`
