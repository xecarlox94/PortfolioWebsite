import React from "react"

import Layout from "../components/layouts/layout"

import Testimonials from "../components/fragments/homePage/testimonials"
import Skills from "../components/fragments/homePage/skills"
import Contact from "../components/fragments/contact"
import Projects from "../components/fragments/homePage/projects"

const IndexPage = () => (
  <Layout title="Home" navbarFixed={true}>
    <header
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1251299/pexels-photo-1251299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
      }}
    >
      Landing Page
    </header>

    <main>
      <Skills />
      <Testimonials />
      <Projects />
      <Contact />
    </main>
  </Layout>
)

export default IndexPage
