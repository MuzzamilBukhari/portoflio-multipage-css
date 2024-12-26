import "../../styles/hero/InfoSection.css";
import React from "react";
import Button from "../Button";
import Link from "next/link";

const InfoSection = () => {
  return (
    <>
      <section className="info-section">
        <div className="container">
          <div className="content">
            <h1 className="title" data-aos="zoom-out" data-aos-duration="500">
              Hey, I&apos;m <br className="title-break" />
              Muzzamil Bukhari
            </h1>
            <h2
              className="subtitle"
              data-aos="zoom-out"
              data-aos-duration="500"
            >
              Aspiring Web Developer
            </h2>
            <p
              className="description"
              data-aos="slide-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              I am a software developer skilled in building web applications
              using modern technologies like React, Next.js, and Appwrite. I
              enjoy learning new tools and applying them to create dynamic,
              user-friendly websites.
            </p>
            <Link
              href={"https://www.linkedin.com/in/muzzamilbukhari/"}
              target="_blank"
            >
              <Button transition="zoom-in" type="button">
                Hire me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;
