import React from "react"

import { AppContext } from "../../../../context/context"

const BurgerButton = ({ colorFill }) => (
  <AppContext.Consumer>
    {({ mobileMenu: { openMobileMenu } }) => (
      <svg
        onClick={openMobileMenu}
        className="transition ease-in-out delay-300 duration-700 "
        style={{ fill: colorFill, cursor: "pointer" }}
        height="25"
        width="25"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M64 128a64 64 0 1164-64 64 64 0 01-64 64zM64 4a60 60 0 1060 60A60 60 0 0064 4z" />
        <path d="M95 44H33a2 2 0 010-4h62a2 2 0 010 4zM95 66H33a2 2 0 010-4h62a2 2 0 010 4zM95 88H33a2 2 0 010-4h62a2 2 0 010 4z" />
      </svg>
    )}
  </AppContext.Consumer>
)

export default BurgerButton
