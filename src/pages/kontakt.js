import React from "react"
import { graphql } from "gatsby"

import HeadingSubpage from "../components/Sections/HeadingSubpage/HeadingSubpage"
import Form from "../components/Form/Form"

import SectionLayout from "../utilities/SectionLayout/SectionLayout"

const KontaktPage = ({ data }) => (
  <>
    <HeadingSubpage
      fluid={data.datoCmsSiteSetup.kontaktPageHeroImage.fluid}
      title={"kontakt"}
      slug={"#kontakt"}
      description={data.datoCmsSiteSetup.kontaktPageDescription}
    />
    <SectionLayout>
      <Form></Form>
    </SectionLayout>
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
