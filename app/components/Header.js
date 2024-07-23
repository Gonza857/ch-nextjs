import Image from "next/image";
import React from "react";

const links = ["link1", "link2", "link3", "link4"];

const Header = () => {
  return (
    <header>
      <nav className="w-full bg-slate-800 h-20 border border-white flex items-center">
        <div className="w-3/4 mx-auto flex items-center justify-between">
          <div className="border border-red-600">
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg"
              }
              width={200}
              height={100}
              alt="Mercedes Logo"
              priority
            />
          </div>
          <ul className="flex gap-5">
            {links.map((link) => (
              <li>
                <a>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
