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
        <a>About</a>
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
        <a href="#contact">Contact</a>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-10 bg-base-100 shadow">
      <div class="container mx-auto navbar ">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <HiOutlineMenuAlt1 className="h-5 w-5" />
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">
            <span className="text-primary">Masum</span> Billah
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div class="navbar-end">
          <div className="flex gap-4">
            <a>
              <i class="devicon-linkedin-plain text-2xl"></i>
            </a>
            <a>
              <i class="devicon-github-original text-2xl"></i>
            </a>
            <a>
              <i class="devicon-facebook-plain text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
