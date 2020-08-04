import React from "react"

import IconYT from "../../IconYT/IconYT"
import IconFB from "../../IconFB/IconFB"
import Button from "../../Button/Button"

import {
  StyledSection,
  StyledTxtWrapper,
  StyledImage,
} from "./00Heading.styles.js"

const Heading = ({ data }) => (
  <StyledSection>
    <StyledTxtWrapper>
      <div></div>
      <div>
        <h1>Jakies motto</h1>
        <p className="lead"> dodatkowy tekst</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
          odio at leo euismod dignissim id eu risus. Aliquam quis consectetur
          nisi, vel ullamcorper lorem.
        </p>
        <div className="buttonWrapper">
          <IconFB as="a" href="https://youtube.com" />
          <Button as="a" href="https://youtube.com">
            {" "}
            Sprawdź mój vlog <IconYT />
          </Button>
        </div>
      </div>
      <div></div>
    </StyledTxtWrapper>

    <StyledImage fluid={data.file.childImageSharp.fluid} />
  </StyledSection>
)

export default Heading
