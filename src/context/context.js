import React, { useState } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isMobileMenu, setMobileMenu] = useState(false)
  const openMobileMenu = () => setMobileMenu(true)
  const closeMobileMenu = () => setMobileMenu(false)

  const mobileMenu = {
    isMobileMenu,
    openMobileMenu,
    closeMobileMenu,
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
