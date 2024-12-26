// SocialLink.jsx
import React from "react";
import { IconType } from "react-icons";
import "../../styles/footer/SocialLink.css";

const SocialLink = ({
  link,
  icon: Icon,
  size = 26,
}: {
  link: string;
  icon: IconType;
  size?: number;
}) => {
  return (
    <a
      className="social-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={size} />
    </a>
  );
};

export default SocialLink;
