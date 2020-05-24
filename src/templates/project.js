import React from "react"

import Page from "../components/page"

const Project = ({ pageContext }) => (
  <Page
    seoAttr={{ title: pageContext.title }}
    headerChild={
      <header
        className="bg-header flex items-center justify-center h-screen pb-12"
        style={{
          background:
            "url(https://picsum.photos/1920/1920/?random) center center no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bg-white mx-4 p-4 text-center md:p-8">
          <h1>{pageContext.title}</h1>
        </div>
      </header>
    }
  >
    <section className="container mx-auto max-w-5xl px-3">
      <h2>{pageContext.subtitle}</h2>
      <p>{pageContext.content}</p>
    </section>
  </Page>
)

export default Project
