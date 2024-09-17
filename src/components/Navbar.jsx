import React from "react";
import logo from "../assets/projects/R-logo.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrinl-0 items-center">
        <img className="mx-2 w-12" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ranjeet-patel-4bb34b258">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Rpatel847">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/ranjeet_patel12/S">
          <FaInstagram />
        </a>
       
        <a href="https://drive.google.com/file/d/1fP-q7cZg6-E0mtAghuNuFhUQvBSBw-uI/view?usp=sharing">
        <h1 className="text-purple-300 border-b">My Resumee</h1>

        </a>
      </div>
    </nav>
  );
};

export default Navbar;
