import React from "react"
import PropTypes from "prop-types"

import Header from "./headers/header"
import Footer from "./footers/footer"
import Layout from "./layout"

const PageLayout = ({ description, lang, meta, title, children }) => {
  return (
    <Layout description={description} lang={lang} meta={meta} title={title}>
      <Header />
      {children}
      <Footer />
    </Layout>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
