import React from "react"

import Heading from "../components/Sections/00Heading/00Heading"
import CompanyInfo from "../components/Sections/01CompanyInfo/01CompanyInfo"
import RecentNews from "../components/Sections/02RecentNews/02RecentNews"

const IndexPage = ({ data }) => (
  <>
    <Heading data={data} />
    <CompanyInfo />
    <RecentNews />
  </>
)

export const query = graphql`
  {
    file(name: { eq: "tlo02" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
