"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Logo from "../../../public/images/pic.jpg";
import Image from "next/image";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Button from "../Button";
import "../../styles/navbar/MobNavbar.css";

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

const MobNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="mob-navbar">
      <div className="mob-navbar-container">
        <Link href={"/"} className="mob-navbar-logo" onClick={toggleNavbar}>
          <div className="mob-navbar-logo-image-container">
            <Image src={Logo} alt={""} className="mob-navbar-logo-image" />
          </div>
          <span>
            Muzzamil
            <span style={{ color: "var(--light-primary)" }}>Bukhari</span>
          </span>
        </Link>
      </div>
      <div className="mob-navbar-controls">
        <button className="mob-navbar-toggle" onClick={toggleNavbar}>
          {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      <nav className={`mob-navbar-menu ${isOpen ? "open" : ""}`}>
        <div className="mob-navbar-menu-content">
          {navItems.map((item) => (
            <NavLink slug={item.slug} key={item.id} onclick={toggleNavbar}>
              {item.name}
            </NavLink>
          ))}
          <a href="/resume.pdf" download>
            <Button type="button" onclick={toggleNavbar}>
              Download Resume
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default MobNavbar;
