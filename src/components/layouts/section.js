import React from "react"

const Section = ({ classes, children }) => {
  const className = "container " + classes
  return <section className={className}>{children}</section>
}

export default Section
