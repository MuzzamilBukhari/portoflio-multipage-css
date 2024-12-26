import React from "react";
import Image from "next/image";
import Button from "../Button";
import "@/styles/projects/ProjectCard.css";

const ProjectCard = ({
  title,
  description,
  features,
  techStack,
  link,
  imgUrl,
}: {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  link: string;
  imgUrl: string;
}) => {
  return (
    <div className="project-card" data-aos="zoom-in" data-aos-duration="1500">
      <div className="project-image-container">
        <Image
          src={imgUrl}
          alt="img"
          className="project-image"
          width={300}
          height={256}
        />
      </div>
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <h3 className="project-subtitle">Key Features:</h3>
        <ul className="project-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <h3 className="project-subtitle">Tech Stack:</h3>
        <div className="project-tech-stack">
          {techStack.map((skill, i) => (
            <div key={i} className="tech-item">
              {skill}
            </div>
          ))}
        </div>
        <div className="project-link-container">
          {link && (
            <Button type="button">
              <a href={link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
