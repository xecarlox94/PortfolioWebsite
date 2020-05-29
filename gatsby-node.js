const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const { dir } = path.parse(node.fileAbsolutePath)

    const dirs = dir.split("/")

    const basePath = "projects/" + dirs[dirs.length - 1]

    const slug = createFilePath({
      node,
      getNode,
      basePath,
    })

    createNodeField({ node, name: `slug`, value: slug })
  }
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    query MyQuery {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (results.error) throw new Error(results.error)

  results.data.allMdx.edges.forEach(
    ({
      node: {
        fields: { slug },
      },
    }) => {
      createPage({
        path: `/project${slug}`,
        component: require.resolve("./src/templates/project.js"),
        context: { slug },
      })
    }
  )
}
