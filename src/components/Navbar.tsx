import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "@/public/images/pic.jpg";
import "@/styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Image src={Logo} alt="logo" className="navbar-logo" />
        <Link className="navbar-brand" href={""}>
          Muzzi
        </Link>
        <nav className="navbar-nav">
          <Link href="#info" className="navbar-link">
            Home
          </Link>
          <Link href="#contact" className="navbar-link">
            Contact
          </Link>
          <Link href="#skills" className="navbar-link">
            Skills
          </Link>
          <Link href="#education" className="navbar-link">
            Education
          </Link>
          <Link href="#portfolio" className="navbar-link">
            Portfolio
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
