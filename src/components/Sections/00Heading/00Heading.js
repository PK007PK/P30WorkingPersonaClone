import React from "react"

import {
  StyledSection,
  StyledTxtWrapper,
  StyledImage,
} from "./00Heading.styles.js"

const Heading = ({ data, button }) => (
  <StyledSection>
    <StyledTxtWrapper>
      <div></div>
      <div>
        <h1>
          <span>GEO</span>
          <br />
          Usługi Geodezyjne
        </h1>
        <p>Sławomir Kowalski</p>
        <p>Marcin Nowak</p>
      </div>
      {button ? <button>Test button</button> : <div></div>}
    </StyledTxtWrapper>

    <StyledImage fluid={data.file.childImageSharp.fluid} />
  </StyledSection>
)

export default Heading
