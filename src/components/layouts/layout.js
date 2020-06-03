import React from "react"
import { AppContext } from "../../context/context"

import MobileNav from "./headers/mobileNav"
import Navbar from "./headers/navbar"
import Footer from "./footers/footer"
import Contact from "../fragments/contact"

const Alert = ({ message, closeFn }) =>
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
          width: `${message.length * 0.7}rem`,
          margin: "1rem auto",
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px 8px",
        }}
      >
        {message}
        <button style={{ float: "right" }} onClick={closeFn}>
          X
        </button>
      </div>
    </div>
  )

const Layout = ({ navbarFixed, headerChild, children }) => (
  <AppContext.Consumer>
    {({ mobileMenu: { isMobileMenu }, alertMsg: { deleteMsg, alert } }) => (
      <>
        <Alert message={alert} closeFn={deleteMsg} />

        <MobileNav isOpen={isMobileMenu} />

        <Navbar fixed={navbarFixed} />

        {headerChild}

        <main>
          {children}

          <Contact />
        </main>

        <Footer />
      </>
    )}
  </AppContext.Consumer>
)

export default Layout
