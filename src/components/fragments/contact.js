import React from "react"

import { useForm } from "react-hook-form"
import classNames from "classnames"
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
    <p style={{ color: "red", fontStyle: "italic", marginTop: "1rem" }}>
      {error.message}
    </p>
  ) : null

const InputWrapper = ({ children, name, error }) => (
  <div
    className={classNames("md:flex", "md:items-center")}
    style={{ marginBottom: "2.5rem" }}
  >
    <div className={classNames("md:w-1/6")}>
      <label
        className={classNames("md:text-right", "md:mb-0")}
        style={{
          marginBottom: "0.75rem",
          paddingRight: "2.5rem",
          display: "block",
        }}
        id={`label-${name}`}
        htmlFor={name}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
    </div>
    <div className="md:w-5/6">
      {children}
      <InputError error={error} />
    </div>
  </div>
)

const getFieldStyle = error => ({
  classes: classNames("focus:outline-none", "focus:bg-white", {
    "focus:border-gray-700": error,
    "focus:border-red-500": error,
  }),
  styles: {
    padding: "1rem 0.75rem",
    width: "100%",
    borderRadius: "0.25rem",
    backgroundColor: "rgb(226, 232, 240)",
    borderWidth: "2px",
    borderColor: "#cbd5e0",
    color: "#4a5568",
  },
})

const TextInput = ({ name, error, type, register }) => {
  const { classes, styles } = getFieldStyle(error)
  return (
    <InputWrapper name={name} error={error}>
      <input
        className={classes}
        style={{
          ...styles,
          lineHeight: "1.25",
          appearance: "none",
        }}
        placeholder={`Please insert your ${name}`}
        aria-labelledby={`label-${name}`}
        name={name}
        id={name}
        type={type}
        ref={register}
      />
    </InputWrapper>
  )
}

const TextAreaInput = ({ name, error, type, register, height }) => {
  const { classes, styles } = getFieldStyle(error)
  return (
    <InputWrapper name={name} error={error}>
      <textarea
        className={classNames(classes, height)}
        style={styles}
        placeholder={`Please insert your ${name}`}
        aria-labelledby={`label-${name}`}
        name={name}
        id={name}
        type={type}
        ref={register}
      />
    </InputWrapper>
  )
}

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema,
  })

  const submit = async data => {
    const encode = data => {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
    }

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data }),
      })
      alert("SUCCESS")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className="w-full max-w-3xl mx-auto" onSubmit={handleSubmit(submit)}>
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
        error={errors.message}
        height={"h-40"}
      />

      <button
        style={{ float: "right", marginTop: "4vh" }}
        type="submit"
        className="shadow bg-black hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-5 rounded"
      >
        Submit
      </button>
    </form>
  )
}

const Contact = () => (
  <section className="py-10" id="contact">
    <div className="container mx-auto px-3 mb-32">
      <h1 className="text-center my-10">Get in touch with me :)</h1>
      <ContactForm />
    </div>
  </section>
)

export default Contact
