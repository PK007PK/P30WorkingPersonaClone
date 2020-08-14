import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { StyledSectionLayout } from "./PlainTextSection.style"

const PlainTextSection = data => (
  <StyledSectionLayout padding="0px">
    <MDXRenderer>{data.data}</MDXRenderer>
  </StyledSectionLayout>
)

export default PlainTextSection
