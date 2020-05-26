import React, { useState } from "react"
import { Link } from "gatsby"

const projectsArr = [
  {
    title: "Project",
    description: "this is a little description",
    link: "https://github.com/",
    image: "https://picsum.photos/1920/1920/?random",
  },
  {
    title: "Project",
    description: "this is a little description",
    link: "https://github.com/",
    image: "https://picsum.photos/1920/1920/?random",
  },
]

const ProjectTile = ({ project: { image, title, description }, tabIndex }) => {
  const [isMouseOver, setMouseOver] = useState(false)

  const onHover = () => setMouseOver(true)

  const onHoverOut = () => setMouseOver(false)

  let overlayClasses =
    "z-10 bg-gray-300 w-full min-h-full bg-opacity-50 flex items-center justify-center "

  if (!isMouseOver) overlayClasses += " invisible"

  const minHeight = "60vh"

  return (
    <div
      role="button"
      tabIndex={tabIndex}
      className="bg-cover bg-center"
      style={{
        minHeight,
        backgroundImage: `url(${image})`,
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
        <Link to="/project/example1/">
          <div className="bg-white p-6 text-center">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

const Projects = () => (
  <section>
    <h1 className="text-center mb-20">Latest work</h1>
    <div className="grid gap-0 grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
      {projectsArr.map((prj, i) => (
        <ProjectTile key={i} tabIndex={i} project={prj} />
      ))}
    </div>
  </section>
)

export default Projects
