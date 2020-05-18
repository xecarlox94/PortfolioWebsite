import React from "react"

import Navbar from "./navbar"

const Header = ({ navbarFixed, classes, styles, children }) => (
  <>
    <Navbar fixed={navbarFixed} />
    {children && (
      <header className={classes} style={styles}>
        {children}
      </header>
    )}
  </>
)
export default Header
