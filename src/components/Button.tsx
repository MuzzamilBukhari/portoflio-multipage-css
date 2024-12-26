import React, { ReactNode } from "react";
import "../styles/Button.css";

type btn = "button" | "submit" | "reset";

const Button = ({
  children,
  className,
  type,
  onclick,
  transition,
}: {
  children: ReactNode;
  className?: string;
  type: btn;
  onclick?: () => void;
  transition?: string;
}) => {
  return (
    <button
      onClick={onclick}
      type={type}
      className={`button ${className || ""}`}
      data-aos={transition}
    >
      {children}
    </button>
  );
};

export default Button;
