// Footer.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/pic.jpg";
import socialLinks from "./socialLinks";
import SocialLink from "./SocialLink";

import "../../styles/footer/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link href={"/"} className="footer-logo">
          <Image src={Logo} alt="Logo" className="footer-logo-image" />
          <span className="footer-logo-text">Muzzi</span>
        </Link>
        <p className="footer-copyright">© 2024 Muzzi</p>
        <span className="footer-social-links">
          {socialLinks.map((link) => (
            <SocialLink key={link.id} link={link.link} icon={link.icon} />
          ))}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
