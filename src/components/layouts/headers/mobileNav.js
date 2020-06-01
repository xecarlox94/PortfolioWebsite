import React from "react"
import { Link } from "gatsby"

import { AppContext } from "../../../context/context"

import CloseButton from "./buttons/closeButton"
import { getPages } from "./navbar"

const MobileNav = () => (
  <div
    className="fixed top-0 z-50 h-screen px-4 py-3 w-full bg-white"
    style={{ opacity: 0.87 }}
  >
    <div style={{ display: "flow-root" }}>
      <CloseButton />
    </div>
    <nav className="flex items-center h-screen">
      <ul style={{ width: "70%", margin: "0 auto" }}>
        {getPages().map(({ target, title, callAction }, i) => {
          let classes = "rounded py-3 px-6 border border-black "
          let style = { width: "100%", display: "block" }

          return (
            <li key={i} style={{ textAlign: "center", marginBottom: "2rem" }}>
              {!callAction ? (
                <Link
                  to={target}
                  className={classes + " bg-transparent text-black"}
                  style={style}
                >
                  {title}
                </Link>
              ) : (
                <AppContext.Consumer>
                  {({ mobileMenu: { closeMobileMenu } }) => (
                    <a
                      href={target}
                      onClick={closeMobileMenu}
                      className={classes + " bg-black text-white"}
                      style={style}
                    >
                      {title}
                    </a>
                  )}
                </AppContext.Consumer>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  </div>
)

export default MobileNav
