import React from "react"
import { AppContext } from "../../store/context"

import MobileNav from "./headers/mobileNav"
import Navbar from "./headers/navbar"
import Footer from "./footers/footer"

const Layout = ({ navbarFixed, headerChild, children }) => (
  <>
    <AppContext.Consumer>
      {({ isMobileMenu, openMobileMenu, closeMobileMenu }) =>
        isMobileMenu && <MobileNav menuClose={closeMobileMenu} />
      }
    </AppContext.Consumer>

    <Navbar fixed={navbarFixed} />

    {headerChild}

    <main>{children}</main>

    <Footer />
  </>
)

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
//   headerChild: PropTypes.node.isRequired,
//   title: PropTypes.string.isRequired,
// }

export default Layout
