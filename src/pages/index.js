import React from "react"

import Layout from "../components/layouts/layout"
import Header from "../components/layouts/headers/header"
import Testimonials from "../components/fragments/homePage/testimonials"
import Skills from "../components/fragments/homePage/skills"
import Contact from "../components/fragments/contact"
import Projects from "../components/fragments/homePage/projects"

const IndexPage = () => (
  <Layout title="Home">
    <Header
      navbarFixed={true}
      classes={"h-screen flex items-center justify-center "}
    >
      <div
        className="bg-local p-64"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)",
        }}
      >
        Landing Page
      </div>
    </Header>
    <main>
      <Skills />
      <Testimonials />
      <Projects />
      <Contact />
    </main>
  </Layout>
)

export default IndexPage
