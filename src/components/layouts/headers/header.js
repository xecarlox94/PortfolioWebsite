import React from "react"
import Navbar from "./navbar"

const Header = ({ navbarFixed, classes, children }) => {
  return (
    <>
      <Navbar fixed={navbarFixed} />
      {children && <header className={classes}>{children}</header>}
    </>
  )
}
export default Header
