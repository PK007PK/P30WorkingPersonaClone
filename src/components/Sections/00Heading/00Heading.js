import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"

import { StyledSection, StyledTxtWrapper } from "./00Heading.styles.js"

import background1 from "../../../assets/images/tlo01.jpg"

const StyledImage = styled(Image)`
  display: none;
  object-fit: cover;

  ${({ theme }) => theme.media.smAbove} {
    display: block;
    margin-top: -98px;
    width: 35%;
  }

  ${({ theme }) => theme.media.mdAbove} {
    display: block;
    width: 40%;
  }
`

const Heading = ({ data, button }) => (
  <StyledSection background={background1}>
    <StyledTxtWrapper>
      <div></div>
      <div>
        <h1>
          <span>GPI</span>
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
