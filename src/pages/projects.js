import React from "react"

import Page from "../components/page"

import { graphql, Link } from "gatsby"
import Image from "../components/utils/image"

const Card = ({
  project: {
    excerpt,
    frontmatter: { title, date },
    fields: { slug },
  },
}) => (
  <div className="max-w-2xl mx-auto my-56">
    <div className="rounded-lg overflow-hidden shadow-lg mx-5">
      <Link to={`/project${slug}/`}>
        <Image
          className="w-full"
          src="https://picsum.photos/1920/1920/?random"
          alt={excerpt}
        />
        <div className="px-3 pb-5">
          <div className="mb-2 pb-5">
            {title} - {date}
          </div>
          <p>{excerpt}</p>
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
      {edges.map(({ node }, i) => (
        <Card key={i} project={node} />
      ))}
    </section>
  </Page>
)

export default Projects

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
          excerpt
        }
      }
    }
  }
`
