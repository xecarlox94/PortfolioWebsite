import React, { useState } from "react"

import MobileNav from "./headers/mobileNav"
import Navbar from "./headers/navbar"
import Footer from "./footers/footer"

const Layout = ({ seoAttr, navbarFixed, headerChild, children }) => {
  const [mMenu, setMMenu] = useState(false)

  return (
    <>
      {mMenu && <MobileNav menuClose={() => setMMenu(false)} />}

      <Navbar fixed={navbarFixed} menuOpen={() => setMMenu(true)} />

      {headerChild}

      <main>{children}</main>

      <Footer />
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
//   headerChild: PropTypes.node.isRequired,
//   title: PropTypes.string.isRequired,
// }

export default Layout
