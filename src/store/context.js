import React from "react"

const initialState = { isMobile: false }

const AppContext = React.createContext(initialState)

const AppProvider = ({ children }) => (
  <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
)

export { AppContext, AppProvider }
