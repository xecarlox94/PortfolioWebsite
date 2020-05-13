import React from "react"

import Layout from "../components/layouts/layout"
import Header from "../components/layouts/headers/header"

const IndexPage = () => (
  <Layout title="Home">
    <h1>TOP presentation section</h1>
    <Header />
    <main>
      <h1>Services</h1>
      <h1>Testimonials</h1>
      <h1>Projects</h1>
    </main>
  </Layout>
)

export default IndexPage
