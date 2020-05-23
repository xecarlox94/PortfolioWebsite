import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"

const EmailForm = () => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
      })}
      onSubmit={values => console.log("form submitted!", values)}
      onReset={() => console.log("form reset")}
    >
      {formik => (
        <form
          className="w-full max-w-xl"
          onSubmit={formik.handleSubmit}
          onReset={formik.handleReset}
        >
          <input name="email" type="email" {...formik.getFieldProps("email")} />
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </form>
      )}
    </Formik>
  )
}

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
