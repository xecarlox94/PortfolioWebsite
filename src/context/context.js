import React, { useState } from "react"

const AppContext = React.createContext()

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
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
