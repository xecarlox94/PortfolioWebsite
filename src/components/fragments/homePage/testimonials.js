import React from "react"

import Img from "../../utils/img"

const testimonialArr = [
  {
    name: "Bruno",
    image: "https://tailwindcss.com/img/jonathan.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
]

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="max-w-xl rounded overflow-hidden text-center m-12">
      <Img
        className="w-20 h-20 rounded-full mx-auto"
        src={testimonial.image}
        alt={testimonial.name}
      />
      <div className="px-6 py-4">
        <h1>{testimonial.name}</h1>
        <p>{testimonial.text}</p>
      </div>
    </div>
  )
}

const Testimonials = () => {
  return (
    <section className="my-40">
      {testimonialArr.map((tst, i) => (
        <TestimonialCard key={i} testimonial={tst} />
      ))}
    </section>
  )
}

export default Testimonials
