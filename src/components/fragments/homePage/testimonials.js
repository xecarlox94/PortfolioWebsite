import React from "react"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

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
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-center m-12">
      <img
        className="w-20 h-20 rounded-full mx-auto"
        src={testimonial.image}
        alt={testimonial.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{testimonial.name}</div>
        <p className="text-gray-700 text-base">{testimonial.text}</p>
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
