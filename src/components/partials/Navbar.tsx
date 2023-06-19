import React from "react";
import Link from "next/link";
import Image from "next/image";

import GithubIcon from "../../../public/github.svg";
import LinkedInIcon from "../../../public/linkedin.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-black text-lg font-semibold mx-">
            <Link href="/" className="mx-2">
              Home
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <a
              href="https://github.com/widal001"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <Image
                src={GithubIcon}
                alt="GitHub Profile"
                className="h-6 w-6"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/billy-daly-72234a60/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <Image
                src={LinkedInIcon}
                alt="LinkedIn Profile"
                className="h-6 w-6"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
