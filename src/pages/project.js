import React from "react"

import Page from "../components/page"

const Project = () => (
  <Page
    seoAttr={{ title: "Project" }}
    headerChild={
      <header
        class="bg-header flex items-center justify-center h-screen pb-12"
        style={{
          background:
            "url(https://picsum.photos/1920/1920/?random) center center no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div class="bg-white mx-4 p-4 text-center md:p-8">
          <h1>Title</h1>
        </div>
      </header>
    }
  >
    <section className="container mx-auto max-w-5xl px-3">
      <h2>Subtitle</h2>
      <p>
        The .container class sets the max-width of an element to match the
        min-width of the current breakpoint. This is useful if you'd prefer to
        design for a fixed set of screen sizes instead of trying to accommodate
        a fully fluid viewport. Note that unlike containers you might have used
        in other frameworks, Tailwind's container does not center itself
        automatically and does not have any built-in horizontal padding.
      </p>
      <p>
        The .container class sets the max-width of an element to match the
        min-width of the current breakpoint. This is useful if you'd prefer to
        design for a fixed set of screen sizes instead of trying to accommodate
        a fully fluid viewport. Note that unlike containers you might have used
        in other frameworks, Tailwind's container does not center itself
        automatically and does not have any built-in horizontal padding.
      </p>
      <p>
        The .container class sets the max-width of an element to match the
        min-width of the current breakpoint. This is useful if you'd prefer to
        design for a fixed set of screen sizes instead of trying to accommodate
        a fully fluid viewport. Note that unlike containers you might have used
        in other frameworks, Tailwind's container does not center itself
        automatically and does not have any built-in horizontal padding.
      </p>
    </section>
  </Page>
)

export default Project
