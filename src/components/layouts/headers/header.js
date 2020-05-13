import React from "react"
import Navbar from "./navbar"

const Header = ({ children }) => {
  return (
    <header>
      <Navbar />
      {children}
    </header>
  )
}
export default Header
