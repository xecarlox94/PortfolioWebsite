import React from "react"
import PropTypes from "prop-types"

import SEO from "../utils/seo"

const Layout = ({ description, lang, meta, title, children }) => {
  return (
    <>
      <SEO description={description} lang={lang} meta={meta} title={title} />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
