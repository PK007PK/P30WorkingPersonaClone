import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import { StyledSectionLayout, StyledWrapper } from "./Footer.style"

const Footer = () => {
  const data = useStaticQuery(query)
  return (
    <StyledSectionLayout padding={"20px 0"}>
      <StyledWrapper>
        <Link to="/privacy">Polityka prywatności</Link>
        <p className="copyryght">
          Copyright © {data.datoCmsSiteSetup.copyrightName}
        </p>
      </StyledWrapper>
    </StyledSectionLayout>
  )
}

const query = graphql`
  {
    datoCmsSiteSetup {
      copyrightName
    }
  }
`

export default Footer
