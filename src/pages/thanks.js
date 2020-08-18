import React from "react"
import { graphql } from "gatsby"

import HeadingSubpage from "../components/Sections/HeadingSubpage/HeadingSubpage"

import ThanksSection from "../components/Sections/ThanksSection/ThanksSection"

const ThanksPage = ({ data }) => (
  <article>
    <HeadingSubpage
      fluid={data.datoCmsSiteSetup.kontaktPageHeroImage.fluid}
      title={"kontakt"}
      slug={"#kontakt"}
      description={data.datoCmsSiteSetup.kontaktPageDescription}
    />
    <ThanksSection />
  </article>
)

export const query = graphql`
  {
    datoCmsSiteSetup {
      kontaktPageDescription
      kontaktPageHeroImage {
        fluid(maxWidth: 650, maxHeight: 500) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`

export default ThanksPage
