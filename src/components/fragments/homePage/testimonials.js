import React from "react"

const testimonialArr = [
  {
    name: "Jose",
    image: "https://tailwindcss.com/img/jonathan.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    name: "Jose",
    image: "https://tailwindcss.com/img/jonathan.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    name: "Jose",
    image: "https://tailwindcss.com/img/jonathan.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
]

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
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
    <section className="h-screen flex items-center justify-center ">
      {testimonialArr.map((tst, i) => (
        <TestimonialCard key={i} testimonial={tst} />
      ))}
    </section>
  )
}

export default Testimonials
