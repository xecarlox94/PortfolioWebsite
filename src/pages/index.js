import React from "react"

import Page from "../components/page"

import Projects from "../components/fragments/homePage/projects"
import About from "../components/fragments/homePage/about"
import Experience from "../components/fragments/homePage/experience"

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
          color: "white",
        }}
      >
        <div className="p-10" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <h1>Welcome</h1>
        </div>
      </header>
    }
    main={
      <>
        <About />
        <Experience />
        <Projects />
      </>
    }
  />
)

export default IndexPage
