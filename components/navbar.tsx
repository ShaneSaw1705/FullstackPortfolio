import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-300 flex flex-row w-[90vw] mx-auto justify-between items-center rounded-full fixed z-50 top-4 right-0 left-0">
      <Link href={"/"} className="btn btn-ghost text-xl">
        ShaneCurtis.Dev
      </Link>
      <button className="btn btn-primary text-white">
        Download my CV
      </button>
    </div>
  );
};

export default NavBar;
