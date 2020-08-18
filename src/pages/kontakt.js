import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import HeadingSubpage from "../components/Sections/HeadingSubpage/HeadingSubpage"

import ContactSection from "../components/Sections/ContactSection/ContactSection"

const KontaktPage = ({ data }) => (
  <>
    <Helmet title="Kontakt" />
    <article>
      <HeadingSubpage
        fluid={data.datoCmsSiteSetup.kontaktPageHeroImage.fluid}
        title={"kontakt"}
        slug={"#kontakt"}
        description={data.datoCmsSiteSetup.kontaktPageDescription}
      />
      <ContactSection />
    </article>
  </>
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

export default KontaktPage
