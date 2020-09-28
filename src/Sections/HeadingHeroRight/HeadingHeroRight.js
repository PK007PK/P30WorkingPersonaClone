import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import IconYT from "../../components/IconYT/IconYT"
import IconFB from "../../components/IconFB/IconFB"

import {
  StyledSection,
  StyledTxtWrapper,
  StyledImage,
  StyledButton,
} from "./HeadingHeroRight.styles.js"

const HeadingHeroRight = () => {
  const data = useStaticQuery(query)
  return (
    <header>
      <StyledSection>
        <StyledTxtWrapper>
          <div></div>
          <div>
            <h1>{data.datoCmsSiteSetup.mainPageMotto}</h1>
            <p className="lead">
              {data.datoCmsSiteSetup.mainPageAdditionalText}
            </p>
            <p className="description">
              Przystępnie o emeryturach,<br></br>
              rentach i zasiłkach
            </p>
            <div className="buttonWrapper">
              <a
                href={data.datoCmsSiteSetup.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <IconFB />
              </a>
              <StyledButton
                small
                href={data.datoCmsSiteSetup.youtubeChanelLink}
              >
                {" "}
                Sprawdź mój vlog <IconYT small />
              </StyledButton>
            </div>
          </div>
          <div></div>
        </StyledTxtWrapper>
        <StyledImage fluid={data.datoCmsSiteSetup.mainPageHeroImage.fluid} />
      </StyledSection>
    </header>
  )
}

const query = graphql`
  {
    datoCmsSiteSetup {
      mainPageMotto
      mainPageAdditionalText
      mainPageDescription
      youtubeChanelLink
      facebookLink
      mainPageHeroImage {
        fluid(maxWidth: 700) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`

export default HeadingHeroRight
