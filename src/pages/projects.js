import React from "react"

import Page from "../components/page"

import Img from "../components/utils/img"
import { graphql, Link } from "gatsby"

const Card = ({ project }) => {
  const { title, description, slug } = project
  return (
    <div className="max-w-2xl mx-auto my-56">
      <div className="rounded-lg overflow-hidden shadow-lg mx-5">
        <Link to={`/project/${slug}/`}>
          <Img
            className="w-full"
            src="https://picsum.photos/1920/1920/?random"
            alt={description}
          />
          <div className="px-3 pb-5">
            <div className="mb-2 pb-5">{title}</div>
            <p>{description}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

const Projects = ({ data: { allProductsJson } }) => {
  const { edges } = allProductsJson
  return (
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
}

export default Projects

export const query = graphql`
  query ProjectsPage {
    allProductsJson {
      edges {
        node {
          slug
          title
          description
        }
      }
    }
  }
`
