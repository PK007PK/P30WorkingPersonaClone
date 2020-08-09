import React from "react"
import { graphql } from "gatsby"

import Heading from "../components/Sections/00Heading/00Heading"

import FeaturedNewsSection from "../components/Sections/FeaturedNewsSection/FeaturedNewsSection"
import RecentlyAdded from "../components/Sections/RecentlyAdded/RecentlyAdded"

const IndexPage = ({ data }) => (
  <>
    <Heading data={data} />
    <FeaturedNewsSection />
    <RecentlyAdded />
    {/* <CompanyInfo /> */}
    {/* <Services />
    <RecentNews /> */}
  </>
)

export const query = graphql`
  {
    file(name: { eq: "tlo15" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 900, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
