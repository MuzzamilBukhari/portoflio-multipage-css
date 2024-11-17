import profile from "../../../public/images/pic.jpg";
import "../../styles/about/About.css";

import React from "react";
import { IoIosSchool } from "react-icons/io";
import { FaUniversity, FaSchool } from "react-icons/fa";
import Image from "next/image";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <div className="profile-image">
            <Image src={profile} alt="profile" className="image-style" />
          </div>
          <div className="about-text">
            <h1 className="about-title">
              About <span className="highlight">me</span>
            </h1>
            <p className="about-description">
              - I specialize in web development and graphic design, creating
              responsive, user-friendly solutions using technologies like React,
              Next.js, and Tailwind CSS.
              <br />
              - My skills extend to web development, graphic design, and
              Object-Oriented Programming (OOP), creating optimized and
              user-focused digital solutions.
              <br />- With experience in tools like Appwrite and Google Sheets
              automation, I focus on delivering efficient, visually appealing
              results while staying up-to-date with the latest trends.
            </p>
          </div>
        </div>

        <div className="cards-container">
          <div className="card1">
            <div className="card-header">
              <div className="icon-container">
                <IoIosSchool />
              </div>
              <h2 className="card-title"> Jinnah Govt College</h2>
            </div>
            <p className="card-text">
              Passed out from Jinnah Govt College in 2021 with an 89% aggregate.
            </p>
          </div>

          <div className="card1">
            <div className="card-header">
              <div className="icon-container secondary-icon">
                <FaUniversity />
              </div>
              <h2 className="card-title">University of Karachi</h2>
            </div>
            <p className="card-text">
              Currently pursuing a Software Engineering degree at UBIT -
              University of Karachi, in my second year with a CGPA of 3.2.
            </p>
          </div>

          <div className="card1">
            <div className="card-header">
              <div className="icon-container">
                <FaSchool />
              </div>
              <h2 className="card-title">Governor IT Course</h2>
            </div>
            <p className="card-text">
              Pursuing the IT course at Governor House to expand knowledge and
              skills in technology, programming, and software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
