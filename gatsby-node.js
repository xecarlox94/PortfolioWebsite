exports.createPages = ({ actions: { createPage } }) => {
  const products = require("./data/products.json")

  products.forEach(product => {
    createPage({
      path: `/project/${product.slug}`,
      component: require.resolve("./src/templates/project.js"),
      context: {
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
      },
    })
  })
}

// https://www.gatsbyjs.org/docs/why-gatsby-uses-graphql/#create-a-page-without-any-data
