import React from "react"
import { AppContext } from "../../context/context"

import MobileNav from "./headers/mobileNav"
import Navbar from "./headers/navbar"
import Footer from "./footers/footer"
import Contact from "../fragments/contact"

const Alert = ({ message }) =>
  message && (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        zIndex: "40",
        width: "100%",
      }}
    >
      <div
        style={{
          borderRadius: "0.25rem",
          backgroundColor: "white",
          padding: "1rem 1rem",
          width: `${message.length * 0.6}rem`,
          margin: "1rem auto",
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px 8px",
        }}
      >
        {message}
        <button style={{ float: "right" }}>X</button>
      </div>
    </div>
  )

const msg = "Thank you, your email was sent."

const Layout = ({ navbarFixed, headerChild, children }) => (
  <>
    <Alert message={msg} />

    <AppContext.Consumer>
      {({ mobileMenu: { isMobileMenu } }) => (
        <MobileNav isOpen={isMobileMenu} />
      )}
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

export default Layout
