import React from "react"

// delete
import { Formik, Field, ErrorMessage, Form } from "formik"
import * as Yup from "yup"

// message: Yup.string().max(500, "Must be 500 characters or less"),
const EmailForm = () => (
  <Formik
    initialValues={{ name: "", email: "", subject: "" }}
    validationSchema={Yup.object({
      name: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      subject: Yup.string().max(30, "Must be 30 characters or less"),
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }, 50)
    }}
  >
    <Form>
      <label htmlFor="name">Name</label>
      <Field name="name" type="text" />
      <ErrorMessage name="name" />
      <label htmlFor="email">Email</label>
      <Field name="email" type="email" />
      <ErrorMessage name="email" />
      <label htmlFor="subject">Subject</label>
      <Field name="subject" type="text" />
      <ErrorMessage name="subject" />
      <button type="submit">Submit</button>
    </Form>
  </Formik>
)
/* <label htmlFor="message">Message</label>
<Field name="message" type="text" />
<ErrorMessage name="message" /> */

const Contact = () => (
  <section>
    <EmailForm />
  </section>
)

// name (required), email(required), subject, message (required)

export default Contact

// const InputError = ({ error }) =>
//   error ? <p style={{ color: "red" }}>{error}</p> : null

// const InputWrapper = ({ children, name, error }) => (
//   <div className="md:flex md:items-center mb-6">
//     <div className="md:w-1/3">
//       <label className="block md:text-right mb-1 md:mb-0 pr-4" htmlFor={name}>
//         {name}
//       </label>
//     </div>
//     <div className="md:w-2/3">
//       {children}
//       <InputError error={error} />
//     </div>
//   </div>
// )

// const Input = props => {
//   const { name, type, error } = props
//   return (
//     <InputWrapper name={name} error={error}>
//       <input
//         className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//         placeholder={`Please insert your ${name}`}
//         id={name}
//         type={type}
//         {...props}
//       />
//     </InputWrapper>
//   )
// }

/* <InputError
error={
  formik.touched.email && formik.errors.email
    ? formik.errors.email
    : null
}
/> */
