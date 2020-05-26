import React from "react"

import Image from "../../utils/image"

const About = () => (
  <section className="my-40 px-4">
    <Image
      className="rounded-full mx-auto"
      src="https://tailwindcss.com/img/jonathan.jpg"
      alt="Jose Fernandes"
      style={{
        minHeight: "10rem",
        minWidth: "10rem",
        height: "33%",
        width: "33%",
      }}
    />
    <div>description</div>
  </section>
)

export default About
