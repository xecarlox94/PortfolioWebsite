import React, { useState } from "react"

const projectsArr = [
  {
    title: "Project",
    description: "this is a little description",
    link: "https://github.com/",
  },
  {
    title: "Project",
    description: "this is a little description",
    link: "https://github.com/",
  },
]

const ProjectTile = ({ project }) => {
  const [isMouseOver, setMouseOver] = useState(false)

  const onHover = () => setMouseOver(true)

  const onHoverOut = () => setMouseOver(false)

  let overlayClasses = "z-10 bg-gray-300 w-full min-h-full bg-opacity-50 "
  const minHeight = "100vh"

  if (!isMouseOver) overlayClasses += "invisible"

  return (
    <div
      className="bg-cover bg-center"
      style={{
        minHeight,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)",
      }}
      onMouseOver={onHover}
      onFocus={onHover}
      onBlur={onHoverOut}
      onMouseLeave={onHoverOut}
    >
      <div
        className={overlayClasses}
        style={{
          minHeight,
        }}
      >
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section>
      <h1
        style={{
          paddingBottom: "20vh",
          paddingTop: "20vh",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Latest work
      </h1>
      <div className="grid gap-0 grid-cols-1 xl:grid-cols-2">
        {" "}
        {projectsArr.map((prj, i) => (
          <ProjectTile key={i} project={prj} />
        ))}
      </div>
    </section>
  )
}

export default Projects
