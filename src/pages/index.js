import React from "react"
import { Helmet } from "react-helmet"

import HeadingHeroRight from "../components/Sections/HeadingHeroRight/HeadingHeroRight"

import FeaturedNewsSection from "../components/Sections/FeaturedNewsSection/FeaturedNewsSection"
import RecentlyAdded from "../components/Sections/RecentlyAdded/RecentlyAdded"

const IndexPage = () => (
  <>
    <Helmet title="Strona główna" />
    <article>
      <HeadingHeroRight />
      <FeaturedNewsSection />
      <RecentlyAdded />
    </article>
  </>
)

export default IndexPage
