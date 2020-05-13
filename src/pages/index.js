import React from "react"

import Layout from "../components/layouts/layout"
import Header from "../components/layouts/headers/header"
import Section from "../components/layouts/section"

const IndexPage = () => (
  <Layout title="Home">
    <Header>HEADER CONTENT</Header>
    <Section>
      <h1>TOP presentation section</h1>
    </Section>
    <main>
      <h1>Services</h1>
      <h1>Testimonials</h1>
      <h1>Projects</h1>
    </main>
  </Layout>
)

export default IndexPage
