import React, { useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const ProjectTile = ({
  project: { topic, title, slug, publicURL },
  tabIndex,
}) => {
  const [isMouseOver, setMouseOver] = useState(false)

  const onHover = () => setMouseOver(true)

  const onHoverOut = () => setMouseOver(false)

  let overlayClasses =
    "z-10 bg-gray-300 w-full min-h-full bg-opacity-50 flex items-center justify-center "

  if (!isMouseOver) overlayClasses += " invisible"

  const minHeight = "60vh"

  return (
    <div
      role="button"
      tabIndex={tabIndex}
      className="bg-cover bg-center"
      style={{
        minHeight,
        backgroundImage: `url(${publicURL})`,
      }}
      onMouseOver={onHover}
      onFocus={onHover}
      onBlur={onHoverOut}
      onMouseLeave={onHoverOut}
    >
      <div
        className={overlayClasses}
        style={{
          minHeight,
        }}
      >
        <Link to={`/project${slug}`}>
          <div className="bg-white p-6 text-center">
            <h1>{title}</h1>
            <p>{topic}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

const Projects = () => (
  <section>
    <h1 className="text-center mb-20">Latest work</h1>
    <div className="grid gap-0 grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              sort: { fields: frontmatter___date, order: ASC }
              limit: 2
            ) {
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
        render={({ allMarkdownRemark: { edges } }) =>
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
            ) => {
              const prj = { topic, slug, title, publicURL }
              return <ProjectTile key={id} tabIndex={i} project={prj} />
            }
          )
        }
      />
    </div>
  </section>
)

export default Projects
