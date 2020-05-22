import React from "react"

import Img from "../../utils/img"

const About = () => {
  return (
    <section>
      <div>
        <Img
          className="w-64 h-64 rounded-full mx-auto"
          src="https://tailwindcss.com/img/jonathan.jpg"
          alt="Jose Fernandes"
        />
      </div>
      <div>description</div>
    </section>
  )
}

export default About
