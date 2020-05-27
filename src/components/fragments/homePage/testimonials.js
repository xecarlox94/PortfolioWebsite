import React from "react"

import Img from "gatsby-image"

const testimonialArr = [
  {
    name: "Bruno",
    image: "https://tailwindcss.com/img/jonathan.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
]

const TestimonialCard = ({ testimonial: { image, name, text } }) => (
  <div className="max-w-xl rounded overflow-hidden text-center m-3">
    <Img className="w-32 h-32 rounded-full mx-auto" src={image} alt={name} />
    <div>
      <h1>{name}</h1>
      <p>{text}</p>
    </div>
  </div>
)

const Testimonials = () => (
  <section className="my-40">
    {testimonialArr.map((tst, i) => (
      <TestimonialCard key={i} testimonial={tst} />
    ))}
  </section>
)

export default Testimonials
