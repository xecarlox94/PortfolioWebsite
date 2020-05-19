import React from "react"

import Layout from "../components/layouts/layout"
import Contact from "../components/fragments/contact"

const Blog = () => (
  <Layout
    title="Blog"
    headerChild={<header classes="h-screen">Welcome to the Blog Page</header>}
  >
    <p>main content</p>
    <Contact />
  </Layout>
)

export default Blog
