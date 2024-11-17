"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/pic.jpg";
import NavLink from "./NavLink";
import "../../styles/navbar/Navbar.css";
const Navbar = () => {
  const navItems = [
    { id: 1, name: "Home", slug: "/" },
    { id: 2, name: "About", slug: "/about" },
    { id: 3, name: "Projects", slug: "/projects" },
    { id: 5, name: "GitHub", slug: "https://github.com/MuzzamilBukhari" },
  ];
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <Link href={"/"} className="navbar-logo">
          {<Image src={Logo} alt={""} className="navbar-image" />}
          <span>
            Muzzamil<span className="navbar-secondary-text">Bukhari</span>
          </span>
        </Link>
        <nav className="navbar-nav">
          {navItems.map((item) => (
            <NavLink slug={item.slug} key={item.id}>
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="navbar-button-container">
          <button onClick={() => console.log(3)} className="navbar-button">
            Download Resume
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
