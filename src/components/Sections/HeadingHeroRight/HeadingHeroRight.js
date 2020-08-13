import React from "react"

import IconYT from "../../IconYT/IconYT"
import IconFB from "../../IconFB/IconFB"

import {
  StyledSection,
  StyledTxtWrapper,
  StyledImage,
  StyledButton,
} from "./HeadingHeroRight.styles.js"

const HeadingHeroRight = ({ data }) => (
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
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconFB as="a" href="https://youtube.com" />
          </a>
          <StyledButton small href="https://youtube.com">
            {" "}
            Sprawdź mój vlog <IconYT small />
          </StyledButton>
        </div>
      </div>
      <div></div>
    </StyledTxtWrapper>

    <StyledImage fluid={data.file.childImageSharp.fluid} />
  </StyledSection>
)

export default HeadingHeroRight
