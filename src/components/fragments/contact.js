import React from "react"
import { useFormik } from "formik"

const SubmitButton = () => (
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button
        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Sign Up
      </button>
    </div>
  </div>
)

const InputErrorMessage = ({ errorMsg }) =>
  errorMsg ? <p>{errorMsg}</p> : null

// do wrapper input !!!!!

const Input = props => {
  const { name, type, errorMsg } = props
  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block md:text-right mb-1 md:mb-0 pr-4" htmlFor={name}>
          {name}
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder={`Please insert your ${name}`}
          id={name}
          type={type}
          {...props}
        />
        <InputErrorMessage errorMsg={errorMsg} />
      </div>
    </div>
  )
}

const validate = values => {
  const errors = {}
  if (!values.name) errors.name = "Required"
  return errors
}

const EmailForm = () => {
  const formik = useFormik({
    initialValues: { name: "" },
    validate,
    onSubmit: values => console.log(values),
  })
  return (
    <form className="w-full max-w-sm" onSubmit={formik.handleSubmit}>
      <Input
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        errorMsg={
          formik.touched.name && formik.errors.name ? formik.errors.name : null
        }
      />

      <SubmitButton />
    </form>
  )
}

const Contact = () => (
  <section className="h-screen flex items-center justify-center ">
    {/* name (required),email(required), subject, message (required) */}
    <EmailForm />
  </section>
)

export default Contact
