import React from "react"

import { AppProvider } from "../context/context"

import SEO from "./utils/seo"
import Layout from "./layouts/layout"

const Page = ({ seoAttr, navbarFixed, headerChild, children }) => (
  <AppProvider>
    <SEO attributes={seoAttr} />
    <Layout
      seoAttr={seoAttr}
      headerChild={headerChild}
      navbarFixed={navbarFixed}
    >
      {children}
    </Layout>
  </AppProvider>
)

export default Page
