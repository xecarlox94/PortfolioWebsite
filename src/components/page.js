import React from "react"

import { AppProvider } from "../store/context"

import SEO from "./utils/seo"
import Layout from "./layouts/layout"

const Page = ({ seoAttr, navbarFixed, headerChild, children }) => {
  return (
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
}

export default Page
