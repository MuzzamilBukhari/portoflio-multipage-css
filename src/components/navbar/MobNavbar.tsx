"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Logo from "../../../public/images/pic.jpg";
import Image from "next/image";
import "../../styles/navbar/MobNavbar.css";
const navItems = [
  { id: 1, name: "Home", slug: "/" },
  { id: 2, name: "About", slug: "/about" },
  { id: 3, name: "Projects", slug: "/projects" },
  { id: 5, name: "GitHub", slug: "https://github.com/MuzzamilBukhari" },
];

const MobNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="mobNavbar-header">
      <div className="mob-navbar-container">
        <Link href="/" className="mob-navbar-logo">
          <Image src={Logo} alt={""} className="mob-navbar-image" />
          <span>
            Muzzamil<span className="mob-navbar-secondary-text">Bukhari</span>
          </span>
        </Link>

        <button
          className="mob-navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="mob-navbar-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <nav
          className={`${isOpen ? "mob-navbar-menu-open" : "mob-navbar-menu"}`}
        >
          {navItems.map((item) => (
            <NavLink slug={item.slug} key={item.id}>
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default MobNavbar;
