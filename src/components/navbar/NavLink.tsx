import Link from "next/link";
import React from "react";
import "../../styles/navbar/Navlink.css"
const NavLink = ({ children, slug }: { children: string; slug: string }) => {
  return (
    <Link href={slug} className="nav-link">
      {children}
    </Link>
  );
};

export default NavLink;
