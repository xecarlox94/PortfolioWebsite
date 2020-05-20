import React from "react"

import Layout from "../components/layouts/layout"

const NotFoundPage = () => (
  <Layout
    seoAttr={{ title: "Page not found" }}
    headerChild={<header>Page not Found</header>}
  >
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
