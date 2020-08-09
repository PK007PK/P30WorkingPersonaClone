import React from "react"

import {
  StyledSection,
  StyledTxtWrapper,
  StyledImageWrapper,
  StyledImage,
  StyledDiv,
} from "./HeadingSubpage.style.js"

import BootstrapContainer from "../../../utilities/BootstrapContainer/BootstrapContainer"

const HeadingSubpage = ({ data, title, slug, description }) => (
  <BootstrapContainer>
    <StyledSection>
      <StyledTxtWrapper>
        <span className="slug">{slug}</span>
        <h1>{title}</h1>
        <p className="description">{description}</p>
      </StyledTxtWrapper>
      <StyledImageWrapper>
        <StyledImage fluid={data.file.childImageSharp.fluid} />
        <StyledDiv></StyledDiv>
      </StyledImageWrapper>
    </StyledSection>
  </BootstrapContainer>
)

export default HeadingSubpage
