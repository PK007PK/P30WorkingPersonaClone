import React from "react"

import Heading from "../components/Sections/00Heading/00Heading"
import SectionLayout from "../utilities/SectionLayout/SectionLayout"
import TilesWrapper from "../utilities/TilesWrapper/TilesWrapper"
import NewsTile from "../components/NewsTile/NewsTile"

const NewsPage = ({ data }) => (
  <>
    <Heading txt={"Aktualności"} data={data} />
    <SectionLayout>
      <h2>Aktualności</h2>
      <TilesWrapper>
        {data.allMdx.nodes.map(item => (
          <>
            {console.log(data.allMdx.nodes)}
            <NewsTile
              date={item.frontmatter.date}
              title={item.frontmatter.title}
              text={item.excerpt}
              slug={item.frontmatter.slug}
              background={item.frontmatter.featuredImage.childImageSharp.fluid}
            />
          </>
        ))}
      </TilesWrapper>
    </SectionLayout>
  </>
)

export const query = graphql`
  {
    file(name: { eq: "tlo05" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    allMdx(limit: 5) {
      nodes {
        frontmatter {
          slug
          author
          date
          title
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 350, maxHeight: 350) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        excerpt(pruneLength: 120)
      }
    }
  }
`

export default NewsPage
