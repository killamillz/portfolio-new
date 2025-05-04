import Link from "next/link";
import React from "react";

function Header() {
  const links = [
    { name: "Home", route: "/home" },
    { name: "Portfolio", route: "/portfolio" },
    { name: "About", route: "/about" },
    { name: "contact", route: "/contact" },
  ];

  const sites = [
    { name: "github", route: "https://github.com/killamillz", icon: "" },
    { name: "linkedin", route: "https://www.linkedin.com/in/ogochukwu-alozie-44291b1a2/", icon: "" },
    { name: "x", route: "/home", icon: "" },
  ];
  return (
    <div className="flex justify-between items-center p-6 rounded-full border-background border w-full bg-foreground">
      <div>
        <h1>Alozie</h1>
      </div>
      <div className="flex justify-between items-center">
        {links?.map((link) => (
          <div key={link.name} className="flex justify-between items-center">
            <Link href={link.route}>{link.name}</Link>
            <p className="font-600 text-[20px]">.</p>
          </div>
        ))}
      </div>
      <div>
      {sites?.map((link) => (
          <div key={link.name} className="flex justify-between items-center">
            <Link href={link.route}>{link.name}</Link>
            <p className="font-600 text-[20px]">.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
