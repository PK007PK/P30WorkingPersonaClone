import React from "react"
import { graphql } from "gatsby"

import HeadingSubpage from "../components/Sections/HeadingSubpage/HeadingSubpage"
import MainBlogSection from "../components/Sections/MainBlogSection/MainBlogSection"
const BlogPage = ({ data }) => (
  <article>
    <HeadingSubpage
      fluid={data.datoCmsSiteSetup.blogPageHeroImage.fluid}
      title={"blog"}
      slug={"#blog"}
      description={data.datoCmsSiteSetup.blogPageDescription}
    />
    <MainBlogSection />
  </article>
)

export const query = graphql`
  {
    datoCmsSiteSetup {
      blogPageDescription
      blogPageHeroImage {
        fluid(maxWidth: 650, maxHeight: 500) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`

export default BlogPage
