import React from "react";
import "@/styles/skills/SkillCard.css";

interface SkillCardProps {
  skill: string;
  percentage: number;
}

const SkillCard = ({ skill, percentage }: SkillCardProps) => {
  return (
    <div className="skill-card" data-aos="flip-right">
      <div className="skill-header">
        <h3 className="skill-name">{skill}</h3>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-bar-container">
        <div className="skill-bar" style={{ width: `${percentage}% ` }}></div>
      </div>
    </div>
  );
};

export default SkillCard;
