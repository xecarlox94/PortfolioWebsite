import React, { useState } from "react"
import PropTypes from "prop-types"

import Header from "./headers/header"
import Footer from "./footers/footer"
import Layout from "./layout"
import MobileNav from "./headers/mobileNav"

const PageLayout = ({
  description,
  lang,
  meta,
  title,
  headerChildComponent,
  children,
}) => {
  const [mMenu, setMMenu] = useState(false)

  const { headerChild, headerClasses, headerStyles } = headerChildComponent

  return (
    <Layout description={description} lang={lang} meta={meta} title={title}>
      {mMenu && <MobileNav menuClose={() => setMMenu(false)} />}

      <Header
        menuOpen={() => setMMenu(true)}
        classes={headerClasses}
        styles={headerStyles}
      >
        {headerChild}
      </Header>

      <main>{children}</main>

      <Footer />
    </Layout>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
