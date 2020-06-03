import React, { useState } from "react"

const AppContext = React.createContext()

const getPages = path => {
  return [
    {
      target: "/projects/",
      title: "Projects",
      callAction: false,
    },
    {
      target: `#contact`,
      title: "Contact me",
      callAction: true,
    },
  ].filter(({ target }) => target !== path)
}

const AppProvider = ({ children }) => {
  const [isMobileMenu, setMobileMenu] = useState(false)

  const mobileMenu = {
    isMobileMenu,
    openMobileMenu: () => setMobileMenu(true),
    closeMobileMenu: () => setMobileMenu(false),
  }

  const [alert, setAlert] = useState(null)

  const alertMsg = {
    alert,
    createMsg: msg => setAlert(msg),
    deleteMsg: () => setAlert(null),
  }

  return (
    <AppContext.Provider
      value={{
        mobileMenu,
        getPages,
        alertMsg,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
