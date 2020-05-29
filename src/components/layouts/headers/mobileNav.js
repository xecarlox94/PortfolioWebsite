import React, { useEffect } from "react"
import { Link } from "gatsby"

import CloseButton from "./buttons/closeButton"
import { getPages } from "./navbar"
import { AppContext } from "../../../context/context"

const MobileNav = () => (
  <div
    className="fixed top-0 z-50 h-screen px-4 py-3 w-full bg-white"
    style={{ opacity: 0.87 }}
  >
    <CloseButton />
    <nav className="flex items-center h-screen">
      <ul className="w-full">
        {getPages().map(({ target, title, callAction }, i) => {
          let button
          let classes =
            "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"

          if (!callAction) {
            button = (
              <Link to={target} className={classes}>
                {title}
              </Link>
            )
          } else {
            button = (
              <AppContext.Consumer>
                {({ mobileMenu: { closeMobileMenu } }) => (
                  <a href={target} onClick={closeMobileMenu}>
                    {title}
                  </a>
                )}
              </AppContext.Consumer>
            )
          }

          return (
            <li key={i} className="text-center my-10">
              {button}
            </li>
          )
        })}
      </ul>
    </nav>
  </div>
)

export default MobileNav
