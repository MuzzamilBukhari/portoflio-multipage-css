import React from "react";
import ProjectCard from "./ProjectCard";
import "../../styles/projects/Projects.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "QR Code Generator",
      imageSrc: "/images/",
      link: "https://qr-code-generator-lake.vercel.app/",
    },
    {
      id: 2,
      name: "Age Calculator",
      imageSrc: "/images/agecal.jpg",
      link: "https://age-calculator-green-sigma.vercel.app/",
    },
    {
      id: 3,
      name: "Book Store Website",
      imageSrc: "/images/bookstore.jpg",
      link: "https://bookstore-mb-nu.vercel.app/",
    },
    {
      id: 4,
      name: "Blogger Website",
      imageSrc: "/images/blog.jpg",
      link: "https://blogger-web.vercel.app/",
    },
    {
      id: 5,
      name: "Process Control Block",
      imageSrc: "/images/pcb.png",
      link: "https://github.com/MuzzamilBukhari/process-control-block.git",
    },
    {
      id: 6,
      name: "Social Network Graph",
      imageSrc: "/images/networkgraph.jpg",
      link: "https://github.com/MuzzamilBukhari/DSA-Project.git",
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1 className="projects-title">Portfolio</h1>
        <span className="tagline">Check out my latest projects</span>
        <p className="projects-description">
          From building functional calculators to complex quiz systems, each
          project highlights my skills in TypeScript, Next.js, and operating
          systems. Feel free to explore the code on GitHub!
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              name={`Project ${project.id} - ${project.name}`}
              image={project.imageSrc}
              alt={`Project ${project.id}`}
              link={project.link}
              key={project.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
