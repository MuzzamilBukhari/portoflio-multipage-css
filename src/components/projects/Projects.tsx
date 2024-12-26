import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "@/data/projects/ProjectsData";
import "@/styles/projects/Projects.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <div
        className="projects-header"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <h2 className="projects-subtitle">Check out my latest projects</h2>
        <h1 className="projects-title">Portfolio</h1>
        <p className="projects-description">
          From building functional calculators to complex quiz systems, each
          project highlights my skills.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              features={project.features}
              link={project.projectLink}
              imgUrl={project.imgUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
