import React from "react"

import { useForm } from "react-hook-form"
import * as yup from "yup"

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .max(30, "Name must be smaller than 30 characters")
    .required("Name is required"),
  email: yup.string().email().required("Email is required"),
  subject: yup
    .string()
    .max(30, "Name must be smaller than 30 characters")
    .required("Subject is required"),
  message: yup
    .string()
    .max(500, "Message must be smaller than 500 characters")
    .required("Message is required"),
})

const InputError = ({ error }) =>
  error ? <p style={{ color: "red" }}>{error.message}</p> : null

const InputWrapper = ({ children, name, error }) => (
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block md:text-right mb-1 md:mb-0 pr-4" htmlFor={name}>
        {name}
      </label>
    </div>
    <div className="md:w-2/3">
      {children}
      <InputError error={error} />
    </div>
  </div>
)

const Input = ({ name, error, type, register }) => (
  <InputWrapper name={name} error={error}>
    <input
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      placeholder={`Please insert your ${name}`}
      name={name}
      id={name}
      type={type}
      ref={register}
    />
  </InputWrapper>
)

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema,
  })

  const onSubmit = data => console.log(data)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm mx-auto">
      <Input type="text" name="name" register={register} error={errors.name} />

      <Input
        type="email"
        name="email"
        register={register}
        error={errors.email}
      />
      <Input
        type="text"
        name="subject"
        register={register}
        error={errors.subject}
      />
      <label>
        textarea
        <textarea name="message" ref={register}></textarea>
        <InputError error={errors.message} />
      </label>
      <br />

      <button
        type="submit"
        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      >
        submit
      </button>
    </form>
  )
}

const Contact = () => (
  <section>
    <ContactForm />
  </section>
)

export default Contact
