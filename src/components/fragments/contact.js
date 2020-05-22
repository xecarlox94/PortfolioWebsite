import React, { useState } from "react"

class TextInput extends React.Component {
  render() {
    const { value, inputName, invalid } = this.props
    return (
      <div className="mb-4">
        <label className="block mb-2" htmlFor={inputName}>
          {inputName}
        </label>
        <input
          className={this.getInputClasses()}
          id={inputName}
          type="text"
          placeholder={`Please insert your ${inputName.toLowerCase()}`}
          aria-label={inputName}
          aria-required="true"
          value={value}
          onChange={this.props.onChange}
        />
        {invalid && (
          <p style={{ color: "red", fontStyle: "italic", paddingTop: "1vh" }}>
            Please insert a valid {inputName.toLowerCase()}
          </p>
        )}
      </div>
    )
  }

  getInputClasses = () => {
    let classes =
      "shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline "

    if (this.props.invalid) classes += " border-red-500"

    return classes
  }
}

const EmailForm = () => {
  const [name, setName] = useState("")
  let error = false
  if (name.length === 0) error = true
  return (
    <form>
      <TextInput
        invalid={error}
        inputName="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
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
