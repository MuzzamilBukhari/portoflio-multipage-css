import Link from "next/link";
import React from "react";
import "../../styles/navbar/NavLink.css";
const NavLink = ({
  children,
  slug,
  onclick,
}: {
  children: string;
  slug: string;
  onclick?: () => void;
}) => {
  return (
    <Link href={slug} className="nav-link" onClick={onclick}>
      {children}
    </Link>
  );
};

export default NavLink;
