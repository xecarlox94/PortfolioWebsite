import React, { useState } from "react"
import PropTypes from "prop-types"

import SEO from "../utils/seo"
import MobileNav from "./headers/mobileNav"
import Navbar from "./headers/navbar"
import Footer from "./footers/footer"

const Layout = ({ description, lang, meta, title, children, navbarFixed }) => {
  const [mMenu, setMMenu] = useState(false)

  return (
    <>
      <SEO description={description} lang={lang} meta={meta} title={title} />

      {mMenu && <MobileNav menuClose={() => setMMenu(false)} />}

      <Navbar fixed={navbarFixed} menuOpen={() => setMMenu(true)} />

      {children}

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Layout
