import Link from "next/link";
import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../../styles/footer/Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer-container">
        <div className="footer-content">
          <Link className="footer-logo" href={"/"}>
            <div className="footer-title">Muzzamil Bukhari</div>
          </Link>
          <p className="footer-copyright">© 2024 Muzzamil Bukhari</p>
          <span className="social-links">
            <a
              href="https://www.facebook.com/mmuzzamilbukhari/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoFacebook className="icon1" />
            </a>
            <a
              className="social-icon-spacing"
              href="https://www.x.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="icon2" />
            </a>
            <a
              className="social-icon-spacing"
              href="https://www.instagram.com/mmuzzamilbukhari/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="icon3" />
            </a>
            <a
              className="social-icon-spacing"
              href="https://www.linkedin.com/in/muzzamilbukhari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="icon4" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
