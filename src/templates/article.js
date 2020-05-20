import React from "react"

import Page from "../components/page"

const Article = () => (
  <Page
    seoAtr={{ title: "Article" }}
    headerChild={<header>Welcome to the article page</header>}
  >
    <p>main content</p>
  </Page>
)

export default Article
