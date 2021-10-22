import React from "react";

import Project from "../Project/Project";

import "./projects.css";

const ProjectNames = [
  {
    name: "TDDD43",
    color: "#9ada9a",
  },
  {
    name: "TSEA24",
    color: "#E3CD1C",
  },
  {
    name: "TSIT02",
    color: "#1CE3CA",
  },
  {
    name: "TDDE45",
    color: "#781CE3",
  },
  {
    name: "TDDD27",
    color: "#E37B1C",
  },
  {
    name: "TSTE24",
    color: "#E31C78",
  },
  {
    name: "TSKR33",
    color: "#871CE3",
  },
  {
    name: "TAOP33",
    color: "FC9DFB",
  },
  {
    name: "TDDE30",
    color: "#FBE80F",
  },
  {
    name: "TDDD17",
    color: "#0F47FB",
  },
];

export default function Projects() {
  return (
    <section className="projects">
      {ProjectNames.map((project, i) => (
        <Project key={i} name={project.name} color={project.color} />
      ))}
    </section>
  );
}
