import React from "react"

import Layout from "../components/layouts/layout"
import Header from "../components/layouts/headers/header"

const IndexPage = () => (
  <Layout title="Home">
    <h1>Home page</h1>
    <Header />
    <main>
      <p>content</p>
    </main>
  </Layout>
)

export default IndexPage
