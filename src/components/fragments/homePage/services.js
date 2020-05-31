import React from "react"

const WebSVG = () => (
  <svg
    id="Layer_1"
    enableBackground="new 0 0 510.934 510.934"
    viewBox="0 0 510.934 510.934"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "10rem", margin: "0 auto" }}
  >
    <g>
      <g>
        <g>
          <path d="m310.934 22.151c-6.4-2.133-10.667 2.133-12.8 6.4l-128 448c-2.133 6.4 2.133 10.667 6.4 12.8h2.133c4.267 0 8.533-2.133 10.667-8.533l128-448c4.267-2.133 0-8.534-6.4-10.667z" />
          <path d="m146.667 90.418c-4.267-4.267-10.667-2.133-14.934 2.133l-130.133 168.533c-2.133 4.267-2.133 8.533 0 12.8l128 170.667c2.133 2.133 4.267 4.267 8.533 4.267 2.133 0 4.267 0 6.4-2.133 4.267-4.267 6.4-10.667 2.133-14.934l-123.733-164.267 123.733-162.133c4.268-4.267 4.268-10.666.001-14.933z" />
          <path d="m509.334 261.084-128-170.667c-4.267-4.267-10.667-6.4-14.934-2.133s-6.4 10.667-2.133 14.934l123.733 164.267-123.733 164.267c-4.267 4.267-2.133 10.667 2.133 14.934 2.133 2.133 4.267 2.133 6.4 2.133 4.267 0 6.4-2.133 8.533-4.267l128-170.667c2.134-4.267 2.134-8.534.001-12.801z" />
        </g>
      </g>
    </g>
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
  </svg>
)

const SkillTile = ({ title, subtitle, svg, list }) => {
  const style = { margin: "2rem auto" }
  return (
    <div className="text-center my-10">
      <div style={style}>{svg}</div>
      <h1 style={style}>{title}</h1>
      <h2 style={style}>{subtitle}</h2>
      <ul style={style}>
        {list.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>
    </div>
  )
}

const Services = () => (
  <section className="my-24">
    <h1 className="text-center mb-5">Services</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 divide-x divide-gray-400">
      <SkillTile
        svg={<WebSVG />}
        title="Web Development"
        subtitle="Full Stack Developer"
        list={["item1", "item1", "item1"]}
      />
      <SkillTile
        svg={<WebSVG />}
        title="Software Development"
        subtitle="Versatile Programmer"
        list={["item1", "item1", "item1", "item1", "item1", "item1"]}
      />
    </div>
  </section>
)

export default Services
