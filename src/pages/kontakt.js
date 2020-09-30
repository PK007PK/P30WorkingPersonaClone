import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import HeadingSubpage from "../test/HeadingSubpage/HeadingSubpage"

import ContactSection from "../test/ContactSection/ContactSection"

const KontaktPage = ({ data }) => {
  const title = data.datoCmsSiteSetup.siteTitle + " - kontakt"
  return (
    <>
      <Helmet title={title} />
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
}

export const query = graphql`
  {
    datoCmsSiteSetup {
      siteTitle
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
