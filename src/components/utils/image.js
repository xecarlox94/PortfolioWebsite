import React from "react"

import Img from "gatsby-image"

const Image = props => {
  if (props.fluid || props.fixed) {
    return <Img {...props} alt={props.alt} style={props.style} />
  }
  return <img {...props} alt={props.alt} style={props.style} />
}

export default Image
