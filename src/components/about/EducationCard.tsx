"use client";
import React, { useState } from "react";
import Button from "../Button";
import { FaUniversity } from "react-icons/fa";
import "@/styles/about/EducationCard.css";

const EducationCard = ({
  institution,
  degree,
  dates,
  highlights,
  size = 20,
}: {
  institution: string;
  degree: string;
  dates: string;
  highlights: string[];
  size?: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className={`education-card ${isExpanded ? "expanded" : ""}`}>
      <div className="card-header">
        <div className="institution-info">
          <div className="icon-container">
            <FaUniversity size={size} />
          </div>
          <h2 className="institution-name">{institution}</h2>
        </div>
        <p className="degree">{degree}</p>
        <p className="dates">{dates}</p>
      </div>
      <div className="card-content">
        {isExpanded && (
          <ul className="highlights">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>
      <Button type="button" onclick={toggleExpand} className="toggle-button">
        {isExpanded ? "Hide Details" : "View Details"}
      </Button>
    </div>
  );
};

export default EducationCard;
