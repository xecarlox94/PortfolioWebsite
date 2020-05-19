import React from "react"

import Navbar from "./navbar"

class Header extends React.Component {
  render() {
    const { navbarFixed, classes, styles, children } = this.props

    return (
      <>
        <Navbar fixed={navbarFixed} menuOpen={this.props.menuOpen} />
        {children && (
          <header className={classes} style={styles}>
            {children}
          </header>
        )}
      </>
    )
  }
}

export default Header
