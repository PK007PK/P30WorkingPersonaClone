import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import SectionLayout from "../../../utilities/SectionLayout/SectionLayout"
import NewsTile from "../../NewsTile/NewsTile"
import TilesWrapper from "../../../utilities/TilesWrapper/TilesWrapper"

import { StyledWrapper, StyledLink } from "./02RecentNews.style"

const query = graphql`
  {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
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
                src
              }
            }
          }
        }
        excerpt(pruneLength: 120)
      }
    }
  }
`

const RecentNews = () => {
  const data = useStaticQuery(query)

  return (
    <>
      <SectionLayout>
        <h2>Aktualności</h2>
        <TilesWrapper>
          {data.allMdx.nodes.map(item => (
            <>
              <NewsTile
                date={item.frontmatter.date}
                title={item.frontmatter.title}
                text={item.excerpt}
                slug={item.frontmatter.slug}
                background={
                  item.frontmatter.featuredImage.childImageSharp.fluid
                }
              />
            </>
          ))}
        </TilesWrapper>
        <StyledWrapper>
          <StyledLink to="/news">Zobacz wszystkie</StyledLink>
        </StyledWrapper>
      </SectionLayout>
    </>
  )
}

// const StyledCarousel = styled(Carousel)`
//   & > * {
//   }
// `

// class RecentNews extends React.Component {
//   breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 576, itemsToShow: 2, itemsToScroll: 1 },
//     { width: 960, itemsToShow: 3 },
//   ]

//   render() {
//     return (
//       <>
//         <SectionLayout>
//           <h2>Aktualności</h2>

//           <StyledCarousel
//             breakPoints={this.breakPoints}
//             showArrows={false}
//             pagination={false}
//           >
//             <NewsTile date={"2020.06.11"} title={"Lorem"} />
//             <NewsTile
//               date={"2020.06.15"}
//               title={"Lorem ipsum dolor mitel amend"}
//             />
//             <NewsTile
//               date={"2020.06.15"}
//               title={"Lorem ipsum dolor mitel amend"}
//             />
//             <NewsTile
//               date={"2020.06.15"}
//               title={"Lorem ipsum dolor mitel amend"}
//             />
//             <NewsTile
//               date={"2020.06.15"}
//               title={"Lorem ipsum dolor mitel amend"}
//             />
//             <NewsTile
//               date={"2020.06.15"}
//               title={"Lorem ipsum dolor mitel amend"}
//             />
//           </StyledCarousel>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               marginTop: "20px",
//             }}
//           >
//             <Button>Zobacz wszystkie</Button>
//           </div>
//         </SectionLayout>
//       </p>
//     )
//   }
// }
export default RecentNews
