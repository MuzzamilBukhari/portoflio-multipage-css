import Link from "next/link";
import React from "react";
import "../../styles/navbar/Navlink.css";
const Navlink = ({
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

export default Navlink;
