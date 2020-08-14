import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import IconYT from "../../IconYT/IconYT"
import IconFB from "../../IconFB/IconFB"

import {
  StyledSection,
  StyledTxtWrapper,
  StyledImage,
  StyledButton,
} from "./HeadingHeroRight.styles.js"

const HeadingHeroRight = () => {
  const data = useStaticQuery(query)
  return (
    <StyledSection>
      <StyledTxtWrapper>
        <div></div>
        <div>
          <h1>{data.datoCmsSiteSetup.mainPageMotto}</h1>
          <p className="lead">{data.datoCmsSiteSetup.mainPageAdditionalText}</p>
          <p className="description">
            {data.datoCmsSiteSetup.mainPageDescription}
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

      <StyledImage fluid={data.datoCmsSiteSetup.mainPageHeroImage.fluid} />
    </StyledSection>
  )
}

const query = graphql`
  {
    datoCmsSiteSetup {
      mainPageMotto
      mainPageAdditionalText
      mainPageDescription
      mainPageHeroImage {
        fluid(maxWidth: 550, maxHeight: 800) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`

export default HeadingHeroRight
