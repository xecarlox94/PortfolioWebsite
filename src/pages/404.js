import React from "react"

import Page from "../components/page"

const NotFoundPage = () => (
  <Page
    seoAttr={{ title: "Page not found" }}
    headerChild={
      <header className="my-20 text-center">
        <h1>Sorry this page was not found.</h1>
      </header>
    }
  >
    <section>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </section>
  </Page>
)

export default NotFoundPage
