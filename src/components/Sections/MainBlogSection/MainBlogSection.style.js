import styled from "styled-components"
import { Link } from "gatsby"

import SectionLayout from "../../../utilities/SectionLayout/SectionLayout"
import VerticalBlogPostEntry from "../../VerticalBlogPostEntry/VerticalBlogPostEntry"

export const StyledBlogPostEntry = styled(VerticalBlogPostEntry)`
  margin: 15px 0;
`

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.color.carrot};
  color: ${({ theme }) => theme.color.milkWhite};
  padding: 10px 20px;
  transition: all 0.3s;
`
