import React from "react"
import { graphql } from "gatsby"

import Heading from "../components/Sections/00Heading/00Heading"

import RecentNews from "../components/Sections/02RecentNews/02RecentNews"
import Services from "../components/Sections/03Services/03Services"

const IndexPage = ({ data }) => (
  <>
    <Heading data={data} />
    {/* <CompanyInfo /> */}
    <Services />
    <RecentNews />
  </>
)

export const query = graphql`
  {
    file(name: { eq: "tlo09" }) {
      childImageSharp {
        fluid(maxWidth: 520, maxHeight: 754, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
