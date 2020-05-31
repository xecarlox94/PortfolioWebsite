import React from "react"

import Page from "../components/page"

const NotFoundPage = () => (
  <Page
    seoAttr={{ title: "Page not found" }}
    headerChild={
      <header className="my-40 text-center">
        <h1>Sorry this page was not found.</h1>
      </header>
    }
  >
    <section className="my-20 text-center">
      <h3 className="mb-40">This route does not exist at the moment.</h3>
      <p>If you have an idea, please share it with me ...</p>
    </section>
  </Page>
)

export default NotFoundPage
