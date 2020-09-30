import React from "react"
import { Helmet } from "react-helmet"

import HeadingHeroRight from "../test/HeadingHeroRight/HeadingHeroRight"
import FeaturedNewsSection from "../test/FeaturedNewsSection/FeaturedNewsSection"
import RecentlyAdded from "../test/RecentlyAdded/RecentlyAdded"

const IndexPage = ({ data }) => {
  const title = data.datoCmsSiteSetup.siteTitle + " - strona główna"
  return (
    <>
      <Helmet title={title} />
      <article>
        <HeadingHeroRight />
        <FeaturedNewsSection />
        <RecentlyAdded />
      </article>
    </>
  )
}

export const query = graphql`
  {
    datoCmsSiteSetup {
      siteTitle
    }
  }
`

export default IndexPage
