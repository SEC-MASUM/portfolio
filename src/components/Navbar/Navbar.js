import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Projects</a>
      </li>

      <li>
        <a>Skills</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div className="container mx-auto">
      <div class="navbar bg-base-100">
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
          <a class="btn btn-ghost normal-case text-xl">Masum</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div class="navbar-end">
          <a
            href="https://drive.google.com/file/d/1516clwC-JRrVQ5i8wDT2pJxcNMkBVuk9/view"
            target="_blank"
            className="btn btn-primary"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
