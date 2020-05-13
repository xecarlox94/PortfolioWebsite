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
    <button className="py-4 px-4 bg-blue-600">Button</button>
  </Layout>
)

export default IndexPage
