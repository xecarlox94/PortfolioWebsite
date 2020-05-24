import React, { useState } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isMobileMenu, setMobileMenu] = useState(false)

  const openMobileMenu = () => setMobileMenu(true)
  const closeMobileMenu = () => setMobileMenu(false)

  return (
    <AppContext.Provider
      value={{
        isMobileMenu,
        openMobileMenu,
        closeMobileMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
