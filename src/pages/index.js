import React from "react"
import { graphql } from "gatsby"

import HeadingHeroRight from "../components/Sections/HeadingHeroRight/HeadingHeroRight"

import FeaturedNewsSection from "../components/Sections/FeaturedNewsSection/FeaturedNewsSection"
import RecentlyAdded from "../components/Sections/RecentlyAdded/RecentlyAdded"

const IndexPage = () => (
  <article>
    <HeadingHeroRight />
    <FeaturedNewsSection />
    <RecentlyAdded />
  </article>
)

export default IndexPage
