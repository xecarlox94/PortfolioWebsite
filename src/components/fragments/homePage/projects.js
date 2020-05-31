import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const ProjectTile = ({
  project: { topic, title, slug, publicURL },
  tabIndex,
}) => (
  <div
    role="button"
    tabIndex={tabIndex}
    className="bg-cover bg-center"
    style={{
      minHeight: "60vh",
      backgroundImage: `url(${publicURL})`,
    }}
  >
    <div
      className={"flex items-center justify-center z-10 w-full min-h-full"}
      style={{
        minHeight: "60vh",
        backgroundColor: "rgba(255,255,255,0.4)",
      }}
    >
      <Link to={`/project${slug}`}>
        <div className="bg-white p-6 text-center border-2 hover:border-black border-transparent">
          <h1 className="pb-3">{title}</h1>
          <p>{topic}</p>
        </div>
      </Link>
    </div>
  </div>
)

const Projects = () => (
  <section className="my-24">
    <h1 style={{ textAlign: "center" }} className="pb-20">
      Latest work
    </h1>
    <div className="grid gap-0 grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
      <StaticQuery
        query={graphql`
          query {
            allMdx(sort: { fields: frontmatter___date, order: ASC }, limit: 2) {
              edges {
                node {
                  frontmatter {
                    topic
                    title
                    image {
                      publicURL
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
        `}
        render={({ allMdx: { edges } }) =>
          edges.map(
            (
              {
                node: {
                  frontmatter: {
                    topic,
                    title,
                    image: { publicURL },
                  },
                  id,
                  fields: { slug },
                },
              },
              i
            ) => (
              <ProjectTile
                key={id}
                tabIndex={i}
                project={{ topic, slug, title, publicURL }}
              />
            )
          )
        }
      />
    </div>
  </section>
)

export default Projects
