import React from "react"

import Img from "../../utils/img"

const About = () => {
  return (
    <section className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      <div>
        <Img src="https://images.pexels.com/photos/1251299/pexels-photo-1251299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      </div>
      <div>description</div>
    </section>
  )
}

export default About
