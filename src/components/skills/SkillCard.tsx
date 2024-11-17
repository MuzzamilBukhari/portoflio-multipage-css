// SkillCard.tsx
import React from "react";
import { IconType } from "react-icons";
import "../../styles/skills/SkillCard.css";

const SkillCard = ({
  skill,
  icon: Icon,
  size = 30,
}: {
  skill: string;
  icon: IconType;
  size?: number;
}) => {
  return (
    <div className="card">
      <Icon size="size" className="icon" />
      <span className="skillName">{skill}</span>
    </div>
  );
};

export default SkillCard;
