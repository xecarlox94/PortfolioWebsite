import React from "react"

import Page from "../components/page"

const NotFoundPage = () => (
  <Page
    seoAttr={{ title: "Page not found" }}
    headerChild={<header>Page not Found</header>}
  >
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Page>
)

export default NotFoundPage
