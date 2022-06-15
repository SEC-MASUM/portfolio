import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>

      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <a href="/#contact">Contact</a>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-10 bg-base-100 shadow">
      <div className="container mx-auto navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <HiOutlineMenuAlt1 className="h-5 w-5" />
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <span className="text-primary">Masum</span> Billah
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/sec-masum/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="devicon-linkedin-plain text-2xl"></i>
            </a>
            <a
              href="https://github.com/SEC-MASUM"
              target="_blank"
              rel="noreferrer"
            >
              <i className="devicon-github-original text-2xl"></i>
            </a>
            <a
              href="https://www.facebook.com/devbillah.masum/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="devicon-facebook-plain text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
