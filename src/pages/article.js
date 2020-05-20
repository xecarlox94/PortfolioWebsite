import React from "react"

import Layout from "../components/layouts/layout"

const Article = () => (
  <Layout
    seoAttr={{ title: "Article" }}
    headerChild={<header>Welcome to the article page</header>}
  >
    <p>main content</p>
  </Layout>
)

export default Article
