import Link from "next/link";
import React from "react";
import "../styles/InfoSection.css"; // Import the plain CSS file

const InfoSection = () => {
  return (
    <section id="info">
      <div className="container">
        <div className="flex-grow">
          <h1 className="title-font">Muzzamil Bukhari</h1>
          <h2 className="title-font">Aspiring Web Developer</h2>
          <p>
            I am a software developer skilled in building web applications using
            modern technologies like React, Next.js, and Appwrite. I enjoy
            learning new tools and applying them to create dynamic,
            user-friendly websites.
          </p>
          <div className="flex">
            <Link
              href="https://www.linkedin.com/in/muzzamilbukhari/"
              target="_blank"
              className="hire-me-btn"
            >
              Hire me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
