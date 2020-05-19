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

class ProjectTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mouseOver: false }
  }

  onHover = () => this.setState({ mouseOver: true })

  onHoverOut = () => this.setState({ mouseOver: false })

  render() {
    const { project } = this.props

    let overlayClasses = "z-10 bg-gray-300 w-full min-h-full bg-opacity-50 "

    if (!this.state.mouseOver) overlayClasses += "invisible"

    return (
      <div
        className="bg-cover bg-center"
        style={{
          minHeight: "35vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)",
        }}
        onMouseOver={this.onHover}
        onMouseLeave={this.onHoverOut}
      >
        <div
          className={overlayClasses}
          style={{
            minHeight: "35vh",
          }}
        >
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      </div>
    )
  }
}

const Projects = () => {
  return (
    <section className="grid gap-0 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {projectsArr.map((prj, i) => (
        <ProjectTile key={i} project={prj} />
      ))}
    </section>
  )
}

export default Projects
