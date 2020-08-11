import React from "react"
import { graphql } from "gatsby"

import HeadingHeroRight from "../components/Sections/HeadingHeroRight/HeadingHeroRight"

import FeaturedNewsSection from "../components/Sections/FeaturedNewsSection/FeaturedNewsSection"
import RecentlyAdded from "../components/Sections/RecentlyAdded/RecentlyAdded"

const IndexPage = ({ data }) => (
  <>
    <HeadingHeroRight data={data} />
    <FeaturedNewsSection />
    <RecentlyAdded />
  </>
)

export const query = graphql`
  {
    file(name: { eq: "tlo15" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1500, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
