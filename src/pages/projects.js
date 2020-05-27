import React from "react"

import Page from "../components/page"

import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Card = ({ project: { slug, title, topic, date, fluid } }) => (
  <div className="max-w-2xl mx-auto my-56">
    <div className="rounded-lg overflow-hidden shadow-lg mx-5">
      <Link to={`/project${slug}/`}>
        <Img className="w-full" alt={title} fluid={fluid} />
        <div className="px-3 pb-5">
          <div className="mb-2 pb-5">
            {title} - {date}
          </div>
          <p>{topic}</p>
        </div>
      </Link>
    </div>
  </div>
)

const Projects = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Page
    seoAttr={{ title: "Projects" }}
    headerChild={<header>Welcome to the Projects Page</header>}
  >
    <section>
      {edges.map(
        ({
          node: {
            id,
            frontmatter: {
              topic,
              date,
              title,
              image: {
                childImageSharp: { fluid },
              },
            },
            fields: { slug },
          },
        }) => (
          <Card key={id} project={{ topic, title, slug, date, fluid }} />
        )
      )}
    </section>
  </Page>
)

export default Projects

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            topic
            date
            title
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          id
        }
      }
    }
  }
`
