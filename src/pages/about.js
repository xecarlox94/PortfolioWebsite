import React from "react"

import Page from "../components/page"

import Contact from "../components/fragments/contact"

const About = () => (
  <Page
    seoAttr={{ title: "About" }}
    headerChild={
      <header className="h-screen">Welcome to the About Page!</header>
    }
  >
    <p>main content</p>
    <Contact />
  </Page>
)

export default About
