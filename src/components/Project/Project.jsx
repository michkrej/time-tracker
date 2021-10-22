import React from "react";
import { GrStorage } from "react-icons/gr";

import "./project.css";

export default function Project({ name, color }) {
  return (
    <section className="project" style={{ background: color }}>
      <h2>{name}</h2>
      <GrStorage style={{ fontSize: "2em" }} />
    </section>
  );
}
