import React from "react"

import Layout from "../components/layouts/layout"
import Contact from "../components/fragments/contact"

const About = () => (
  <Layout
    title="About"
    headerChild={
      <header className="h-screen">Welcome to the About Page!</header>
    }
  >
    <p>main content</p>
    <Contact />
  </Layout>
)

export default About
