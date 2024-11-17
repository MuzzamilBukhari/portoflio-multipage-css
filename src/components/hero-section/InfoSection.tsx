import React from "react";
import "@/styles/hero-section/InfoSection.css";

const InfoSection = () => {
  return (
    <section className="infoSection">
      <div className="container">
        <div className="content">
          <h1 className="title-name">
            Hey, <span className="highlight"> I&apos;m</span>
          </h1>
          <h1 className="title-name">
            Muzzamil <span className="highlight"> Bukhari</span>
          </h1>
          <h2 className="subtitle">
            Aspiring Web <span className="highlight">Developer</span>
          </h2>
          <p className="descriptions">
            I am a software developer skilled in building web applications using
            modern technologies like React, Next.js, and Appwrite. I enjoy
            learning new tools and applying them to create dynamic,
            user-friendly websites.
          </p>
          <a
            href="https://www.linkedin.com/in/muzzamilbukhari/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hireButton">Hire me</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
