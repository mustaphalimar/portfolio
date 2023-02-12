import Link from "next/link";
import Button from "../UI/Button";

import navLinks from "@/constants/navlinks";
import { useState } from "react";

export default function Header() {
  const [currentLink, setCurrentLink] = useState(0);

  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center">
        <Link
          href="/"
          className={`${
            currentLink === 0
              ? "bg-primaryLight text-black"
              : "bg-transparent text-white"
          } font-bold uppercase w-[40px] h-[40px] rounded text-2xl flex items-center justify-center`}
          onClick={() => setCurrentLink(0)}
        >
          M
        </Link>
        <div className="ml-10">
          {navLinks.map((link, index) => {
            return (
              <Link
                key={link.id}
                className={`${
                  currentLink === link.id
                    ? "bg-primaryLight text-black opacity-100"
                    : "bg-transparent text-white opacity-[60%]"
                }  ml-8 p-2 rounded-lg  transition duration-400 hover:opacity-100 `}
                href={link.path}
                onClick={() => setCurrentLink(link.id)}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <Button text="Get in touch" />
      </div>
    </header>
  );
}
