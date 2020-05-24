import React from "react"

import Page from "../components/page"

const Project = ({ pageContext }) => (
  <Page
    seoAttr={{ title: pageContext.title }}
    headerChild={
      <header
        className="bg-fixed bg-center bg-cover flex items-center justify-center h-screen"
        style={{
          background: `url(${pageContext.image})`,
        }}
      >
        <div className="bg-white mx-4 p-4 text-center md:p-8">
          <h1>{pageContext.title}</h1>
        </div>
      </header>
    }
  >
    <section className="container mx-auto max-w-5xl px-3">
      <div dangerouslySetInnerHTML={{ __html: pageContext.description }}></div>
      <p>PRICE: {pageContext.price}</p>
    </section>
  </Page>
)

export default Project
