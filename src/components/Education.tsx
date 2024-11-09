import React from "react";
import { IoIosSchool } from "react-icons/io";
import { FaUniversity, FaSchool } from "react-icons/fa";
import "../styles/Education.css"; // Import the plain CSS file

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        {/* Section Title */}
        <div className="section-title">
          <h1>Education</h1>
        </div>

        {/* Education Cards */}
        <div className="education-cards">
          {/* Card 1 - Jinnah Govt College */}
          <div className="card">
            <div className="card-content">
              <div className="title">
                <div className="card-icon">
                  <IoIosSchool />
                </div>
                <h2 className="card-title">Jinnah Govt College</h2>
              </div>
              <div className="card-text">
                Passed out from Jinnah Govt College in 2021 with an 89%
                aggregate.
              </div>
            </div>
          </div>
          {/* Card 2 - University of Karachi */}
          <div className="card">
            <div className="card-content">
              <div className="flex items-center mb-3">
                <div className="card-icon">
                  <FaUniversity />
                </div>
                <h2 className="card-title">University of Karachi</h2>
              </div>
              <div className="card-text">
                Currently pursuing a Software Engineering degree at UBIT -
                University of Karachi, in my second year with a CGPA of 3.2.
              </div>
            </div>
          </div>
          {/* Card 3 - Governor IT Course */}
          <div className="card">
            <div className="card-content">
              <div className="flex items-center mb-3">
                <div className="card-icon">
                  <FaSchool />
                </div>
                <h2 className="card-title">Governor IT Course</h2>
              </div>
              <div className="card-text">
                Pursuing the IT course at Governor House to expand knowledge and
                skills in technology, programming, and software development.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
