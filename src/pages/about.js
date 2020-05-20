import React from "react"

import Page from "../components/page"

import Contact from "../components/fragments/contact"
import Image from "../components/utils/image"

const About = () => (
  <Page
    seoAttr={{ title: "About" }}
    headerChild={
      <header className="h-screen">Welcome to the About Page!</header>
    }
  >
    <section className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      <div>
        <Image src="https://images.pexels.com/photos/1251299/pexels-photo-1251299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      </div>
      <div>description</div>
    </section>
    <Contact />
  </Page>
)

export default About
