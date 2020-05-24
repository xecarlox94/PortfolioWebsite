import React from "react"
import { AppContext } from "../../context/context"

import MobileNav from "./headers/mobileNav"
import Navbar from "./headers/navbar"
import Footer from "./footers/footer"
import Contact from "../fragments/contact"

const Layout = ({ navbarFixed, headerChild, children }) => (
  <>
    <AppContext.Consumer>
      {({ isMobileMenu, openMobileMenu, closeMobileMenu }) =>
        isMobileMenu && <MobileNav menuClose={closeMobileMenu} />
      }
    </AppContext.Consumer>

    <Navbar fixed={navbarFixed} />

    {headerChild}

    <main>
      {children}
      <Contact />
    </main>

    <Footer />
  </>
)

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
//   headerChild: PropTypes.node.isRequired,
//   title: PropTypes.string.isRequired,
// }

export default Layout
