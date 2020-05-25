import React from "react"

import Img from "gatsby-image"

const Image = props => {
  if (props.fluid || props.fixed) {
    return <Img {...props} alt={props.alt} />
  }
  return <img {...props} alt={props.alt} />
}

export default Image
