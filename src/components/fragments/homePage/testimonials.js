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
  {
    name: "Bruno",
    image: "https://tailwindcss.com/img/jonathan.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
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
      <Carousel
        infinite
        rtl
        dots
        centered
        autoPlay={5000}
        animationSpeed={2500}
        slidesPerPage={2}
        keepDirectionWhenDragging
        breakpoints={{
          640: {
            slidesPerPage: 1,
          },
        }}
      >
        {testimonialArr.map((tst, i) => (
          <TestimonialCard key={i} testimonial={tst} />
        ))}
      </Carousel>
    </section>
  )
}

export default Testimonials
