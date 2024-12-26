"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import Navlink from "./NavLink";
import Logo from "../../../public/images/pic.jpg";
import Button from "../Button";
import "../../styles/navbar/Navbar.css";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      name: "Home",
      slug: "/",
    },
    {
      id: 2,
      name: "About",
      slug: "/about",
    },
    {
      id: 3,
      name: "Projects",
      slug: "/projects",
    },
    {
      id: 4,
      name: "Github",
      slug: "https://github.com/MuzzamilBukhari",
    },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href={"/"} className="navbar-logo">
          <div className="navbar-logo-image-container">
            <Image src={Logo} alt={""} className="navbar-logo-image" />
          </div>
          <span>
            Muzzamil
            <span style={{ color: "var(--light-primary)" }}>Bukhari</span>
          </span>
        </Link>
        <div className="navbar-content">
          <nav className="navbar-nav">
            {navItems.map((item) => (
              <Navlink slug={item.slug} key={item.id}>
                {item.name}
              </Navlink>
            ))}
          </nav>
          <a href="/resume.pdf" download>
            <Button type="button">Download Resume</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
