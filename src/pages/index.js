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
      classes={"h-screen flex items-center justify-center bg-cover bg-center"}
      styles={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1251299/pexels-photo-1251299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
      }}
    >
      Landing Page
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
