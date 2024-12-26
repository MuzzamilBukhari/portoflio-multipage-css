import React from "react";
import Link from "next/link";
import projects from "@/data/projects/ProjectsData";
import { ProjectCard } from "../";
import { Button } from "../";
import "@/styles/featured/Featured.css";

const Featured = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <div className="featured-container">
      <h1 className="featured-title">
        My <span className="featured-title-span">Projects</span>
      </h1>
      <div className="featured-grid">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            features={project.features}
            techStack={project.techStack}
            link={project.projectLink}
            imgUrl={project.imgUrl}
          />
        ))}
      </div>
      <Button type="button" className="featured-button">
        <Link href="/projects">See More Projects</Link>
      </Button>
    </div>
  );
};

export default Featured;
