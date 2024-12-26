"use client";
import React from "react";
import SkillCard from "./SkillCard";
import "@/styles/skills/Skills.css";

export default function Skill() {
  const skills = [
    { id: 1, name: "React", percentage: 85 },
    { id: 2, name: "HTML & CSS", percentage: 90 },
    { id: 3, name: "JavaScript", percentage: 80 },
    { id: 4, name: "TypeScript", percentage: 75 },
    { id: 5, name: "Data Structures & Algorithms (DSA)", percentage: 70 },
    { id: 6, name: "Object-Oriented Programming (OOP)", percentage: 85 },
    { id: 7, name: "DBMS", percentage: 80 },
    { id: 8, name: "Operating Systems (OS)", percentage: 75 },
    { id: 9, name: "Assembly Language", percentage: 60 },
    { id: 10, name: "Tailwind CSS", percentage: 85 },
    { id: 11, name: "Graphic Design", percentage: 70 },
    { id: 12, name: "Next.js", percentage: 65 },
    { id: 13, name: "Sanity", percentage: 55 },
    { id: 14, name: "Git & GitHub", percentage: 60 },
    { id: 15, name: "Vercel", percentage: 70 },
    { id: 16, name: "Python", percentage: 65 },
    { id: 17, name: "Appwrite", percentage: 45 },
  ];

  return (
    <div id="Skill" className="skill-section">
      <section>
        <div
          className="skills-header"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="skill-title">
            My <span className="skill-title-span">Skills</span>
          </h1>
          <p className="skill-description">
            Crafting solutions with code, design, and innovation
          </p>
        </div>

        <div className="skill-grid">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
