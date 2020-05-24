import React from "react"

import { useForm } from "react-hook-form"
import * as yup from "yup"

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .max(30, "Name must be smaller than 30 characters")
    .required("Name is required"),
  email: yup.string().email().required("Email is required"),
  subject: yup.string().max(30, "Name must be smaller than 30 characters"),
  message: yup
    .string()
    .max(500, "Message must be smaller than 500 characters")
    .required("Message is required"),
})

const InputError = ({ error }) =>
  error ? (
    <p style={{ color: "red", fontStyle: "italic" }}>{error.message}</p>
  ) : null

const InputWrapper = ({ children, name, error }) => (
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="block md:text-right mb-1 md:mb-0 pr-4"
        id={`label-${name}`}
        htmlFor={name}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
    </div>
    <div className="md:w-2/3">
      {children}
      <InputError error={error} />
    </div>
  </div>
)

const getFieldStyle = error => {
  let styleClasses =
    "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"

  if (!error) styleClasses += "  focus:border-black"
  else styleClasses += " focus:border-red-500"

  return styleClasses
}

const TextInput = ({ name, error, type, register }) => (
  <InputWrapper name={name} error={error}>
    <input
      className={getFieldStyle(error)}
      placeholder={`Please insert your ${name}`}
      aria-labelledby={`label-${name}`}
      name={name}
      id={name}
      type={type}
      ref={register}
    />
  </InputWrapper>
)

const TextAreaInput = ({ name, error, type, register }) => (
  <InputWrapper name={name} error={error}>
    <textarea
      className={getFieldStyle(error)}
      placeholder={`Please insert your ${name}`}
      aria-labelledby={`label-${name}`}
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
      <TextInput
        type="text"
        name="name"
        register={register}
        error={errors.name}
      />

      <TextInput
        type="email"
        name="email"
        register={register}
        error={errors.email}
      />
      <TextInput
        type="text"
        name="subject"
        register={register}
        error={errors.subject}
      />
      <TextAreaInput
        name="message"
        register={register}
        error={errors.subject}
      />

      <button
        type="submit"
        className="shadow bg-black hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
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
