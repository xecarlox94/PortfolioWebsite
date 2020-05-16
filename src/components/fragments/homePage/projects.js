import React from "react"

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
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  )
}

const Projects = () => {
  return (
    <section className="h-screen grid grid-cols-3 gap-0">
      {projectsArr.map((prj, i) => (
        <ProjectTile key={i} project={prj} />
      ))}
    </section>
  )
}

export default Projects
