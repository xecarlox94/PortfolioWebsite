import React from "react"

const EmailForm = () => {
  return (
    <form>
      <div class="mb-4">
        <label className="block mb-2" for="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
        />
      </div>
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
