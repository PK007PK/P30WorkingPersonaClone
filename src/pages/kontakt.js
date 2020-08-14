import React from "react"
import { graphql } from "gatsby"

import HeadingSubpage from "../components/Sections/HeadingSubpage/HeadingSubpage"
import ContactForm from "../components/ContactForm/ContactForm"

const KontaktPage = ({ data }) => (
  <>
    <HeadingSubpage
      fluid={data.datoCmsSiteSetup.kontaktPageHeroImage.fluid}
      title={"kontakt"}
      slug={"#kontakt"}
      description={data.datoCmsSiteSetup.kontaktPageDescription}
    />
    <p>asas</p>
    <p>asas</p>
    <ContactForm></ContactForm>
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
