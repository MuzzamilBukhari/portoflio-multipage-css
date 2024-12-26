"use client";

import { InfoSection, Featured, Skills, Contact } from "@/components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <InfoSection />
      <Featured />
      <Skills />
      <Contact />
    </>
  );
}
