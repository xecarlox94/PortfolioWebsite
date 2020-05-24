import React from "react"

import { useForm } from "react-hook-form"
import * as yup from "yup"

// name (required), email(required), subject, message (required)
const schema = yup.object().shape({
  name: yup
    .string()
    .max(30, "Name must be smaller than 30 characters")
    .required("Name is required"),
  email: yup.string().email(),
  subject: yup.string().max(30, "Name must be smaller than 30 characters"),
  message: yup
    .string()
    .max(500, "Message must be smaller than 500 characters")
    .required("Message is required"),
})
const EmailForm = () => {
  const {} = useForm({
    validationSchema: schema,
  })
}

const Contact = () => (
  <section>
    <EmailForm />
  </section>
)

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

/* <label htmlFor="message">Message</label>
<Field name="message" type="text" />
<ErrorMessage name="message" /> */
