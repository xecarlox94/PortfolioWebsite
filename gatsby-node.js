exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    query {
      allProductsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (results.error) throw new Error(results.error)

  results.data.allProductsJson.edges.forEach(({ node: { slug } }) => {
    createPage({
      path: `/project/${slug}/`,
      component: require.resolve("./src/templates/project.js"),
      context: {
        slug,
      },
    })
  })
}

// https://www.gatsbyjs.org/docs/why-gatsby-uses-graphql/#create-a-page-without-any-data
