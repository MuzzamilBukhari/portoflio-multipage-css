import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../../styles/projects/ProjectCard.css";

const ProjectCard = ({
  name,
  image,
  link,
  alt,
  className,
}: {
  name: string;
  image: string;
  link: string;
  alt: string;
  className?: string;
}) => {
  return (
    <div className={`project-card ${className}`}>
      <Link href={link} target="_blank" className="project-card-link">
        <div className="project-card-image-container">
          <Image
            src={image}
            alt={alt}
            width={300}
            height={200}
            className="project-card-image"
          />
        </div>
        <h3 className="project-card-title">{name}</h3>
      </Link>
    </div>
  );
};

export default ProjectCard;
