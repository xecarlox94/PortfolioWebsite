import React from "react"

import { AppContext } from "../../../../context/context"

const CloseButton = () => (
  <AppContext.Consumer>
    {({ isMobileMenu, openMobileMenu, closeMobileMenu }) => (
      <svg
        className="float-right"
        onClick={closeMobileMenu}
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <path
            d="M12.5 23a11.5 11.5 0 100-23 11.5 11.5 0 000 23zm0-1a10.5 10.5 0 100-21 10.5 10.5 0 000 21zm-4.24-5.55l-.71-.7 4.24-4.25-4.24-4.24.7-.71 4.25 4.24 4.24-4.24.71.7-4.24 4.25 4.24 4.24-.7.71-4.25-4.24-4.24 4.24z"
            fill="#000"
          />
        </g>
      </svg>
    )}
  </AppContext.Consumer>
)

export default CloseButton
