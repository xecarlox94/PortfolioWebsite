import React from "react"

import Page from "../components/page"

const NotFoundPage = () => (
  <Page
    seoAttr={{ title: "Page not found" }}
    headerChild={
      <header style={{ textAlign: "center", margin: "10rem 0" }}>
        <h1>Sorry this page was not found.</h1>
      </header>
    }
  >
    <section style={{ textAlign: "center", margin: "5rem 0" }}>
      <h3 style={{ marginBottom: "10rem" }}>
        This route does not exist at the moment.
      </h3>
      <p>If you have an idea, please share it with me ...</p>
    </section>
  </Page>
)

export default NotFoundPage
