import React from "react"

import Page from "../components/page"

import Testimonials from "../components/fragments/homePage/testimonials"
import Skills from "../components/fragments/homePage/skills"
import Projects from "../components/fragments/homePage/projects"
import About from "../components/fragments/homePage/about"

const IndexPage = () => (
  <Page
    seoAttr={{ title: "Home" }}
    navbarFixed={true}
    headerChild={
      <header
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1251299/pexels-photo-1251299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
        }}
      >
        Landing Page
      </header>
    }
  >
    <Skills />
    <About />
    <Projects />
    <Testimonials />
  </Page>
)

export default IndexPage
