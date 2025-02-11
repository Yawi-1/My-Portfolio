import React, { useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: "React Dashboard", description: "A simple admin dashboard" },
    { id: 2, title: "MERN Blog", description: "A full-stack blog system" }
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <ul className="space-y-3">
        {projects.map((project) => (
          <li key={project.id} className="p-3 bg-white shadow rounded">
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
