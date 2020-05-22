import React, { useState } from "react"

class TextInput extends React.Component {
  render() {
    const { value, inputName } = this.props
    return (
      <div className="mb-4">
        <label className="block mb-2" htmlFor={inputName}>
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id={inputName}
          type="text"
          placeholder="Please insert your Name"
          aria-label="Name"
          aria-required="true"
          value={value}
          onChange={this.props.onChange}
        />
        <p style={{ color: "red", fontStyle: "italic", paddingTop: "1vh" }}>
          Please insert a valid value
        </p>
      </div>
    )
  }
}

const EmailForm = () => {
  const [name, setName] = useState("")
  return (
    <form>
      <TextInput
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
