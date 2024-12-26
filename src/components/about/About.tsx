import profile from "../../../public/images/pic.jpg";

import Image from "next/image";
import "../../styles/about/About.css";
import EducationSection from "./EducationSection";

export default function AboutSection() {
  return (
    <section className={"about-section"}>
      <div className={"container"}>
        <h1 className="main-title" data-aos="zoom-in">
          About <span className="highlight">me</span>
        </h1>
        <div className={"content-wrapper"}>
          <div className={"image-container"}>
            <Image
              src={profile}
              alt={"profile"}
              width={200}
              height={200}
              className={"profile-image"}
            />
          </div>
          <div className={"text-container"}>
            <div
              className="text-content"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <p>
                - I&apos;m a passionate web developer and graphic designer with
                a knack for crafting responsive and user-friendly digital
                experiences.
              </p>
              <p>
                - Currently in my second year of university, I specialize in
                building solutions that combine modern technologies with
                creative designs. Whether it&apos;s developing efficient web
                applications or designing eye-catching graphics, I thrive on
                turning ideas into impactful realities.
              </p>
              <p>
                - With skills in Data Structures and Algorithms (DSA),
                Object-Oriented Programming (OOP), DBMS, assembly language, and
                operating systems, I approach challenges with both technical
                expertise and a problem-solving mindset.
              </p>
              <p>
                - My journey in web development has led me to explore frameworks
                like React and Next.js, while my design background equips me to
                create visually appealing and intuitive interfaces. I believe in
                continuously learning and evolving, ensuring my work stays
                innovative and up-to-date.
              </p>
              <p>
                - Feel free to explore my portfolio to see some of my recent
                projects and designs. I&apos;m always excited to connect,
                collaborate, and grow. If you&apos;d like to discuss a project
                or simply say hello, don&apos;t hesitate to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
      <EducationSection />
    </section>
  );
}
