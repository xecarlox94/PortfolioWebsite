import React from "react"

import Page from "../components/page"

import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Card = ({ project: { slug, title, topic, date, fluid } }) => (
  <div className="max-w-2xl mx-auto my-24">
    <div className="rounded-lg overflow-hidden shadow-xl mx-5">
      <Link to={`/project${slug}/`}>
        <Img className="w-full" alt={title} fluid={fluid} />
        <div className="px-3 py-4">
          <h3 className="mb-1">{title}</h3>
          <div className="flex flex-wrap justify-between">
            <p className="mt-1 mr-16" style={{ fontStyle: "italic" }}>
              {topic}
            </p>
            <p className="mt-1">{date}</p>
          </div>
        </div>
      </Link>
    </div>
  </div>
)

const Projects = ({
  data: {
    allMdx: { edges },
  },
}) => (
  <Page
    seoAttr={{ title: "Projects" }}
    headerChild={
      <header className="my-32 text-center">
        <h1>My Projects</h1>
      </header>
    }
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
    allMdx(filter: { frontmatter: { title: { ne: "" } } }) {
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
