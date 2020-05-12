import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./headers/header"
import Footer from "./footers/footer"
import Layout from "./layout"

const PageLayout = ({ description, lang, meta, title, children }) => {
  var data

  if (!title) {
    data = useStaticQuery(graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
  }

  return (
    <Layout description={description} lang={lang} meta={meta} title={title}>
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
      <Footer />
    </Layout>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default PageLayout
