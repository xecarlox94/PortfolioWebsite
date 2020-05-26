const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "projects" })
    createNodeField({ node, name: `slug`, value: slug })
  }
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    query MyQuery {
      allMarkdownRemark {
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

  results.data.allMarkdownRemark.edges.forEach(
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
