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

  return (
    <AppContext.Provider
      value={{
        mobileMenu,
        getPages,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
