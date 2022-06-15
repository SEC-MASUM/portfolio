import React from "react";
import { Link } from "react-router-dom";

const project = {
  id: 2,
  title: "Book Buddy",
  subtitle: "MERN Stack",
  description:
    "It a book warehouse management website. Very exciting project using ReactJS, Tailwind and MongoDB. This project purpose is to implement User authentication, curd operation, work with both client and server, use JTW to make more secure to protect unauthentic access.",
  technologies: [
    "React",
    "Node",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Tailwind CSS Forms",
    "Firebase",
    "React Firebase Hooks",
    "React Router",
    "React Icons",
    "React Toastify",
  ],
  coverPhoto:
    "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/book-buddy.png",
  images: [
    {
      imageURL:
        "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/book-buddy-add-inventory.png",
      title: "Add Inventory Page",
    },
    {
      imageURL:
        "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/book-buddy-inventory-details.png",
      title: "Inventory Details Page",
    },
    {
      imageURL:
        "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/book-buddy-manage-inventories.png",
      title: "Manage Inventory Page",
    },
    {
      imageURL:
        "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/book-buddy-my-items.png",
      title: "My Items Page",
    },
  ],
  live: "https://book-buddy01.web.app/",
  client: "https://github.com/SEC-MASUM/book-buddy-client",
  server: "https://github.com/SEC-MASUM/book-buddy-server",
};

const BookBuddy = () => {
  const { id, title, coverPhoto, live, client, server } = project;
  return (
    <div className="border-2 rounded-xl">
      <h3 className="text-2xl font-medium py-2 text-center rounded-t-lg">
        {title}
      </h3>
      <figure className="">
        <img
          src={coverPhoto}
          alt=""
          className="object-cover object-top hover:object-bottom transition-all duration-[4000ms] ease-linear  w-full h-[400px] cursor-pointer"
        />
      </figure>
      <div className="">
        <div className="flex justify-center gap-3 py-3">
          <a
            href={live}
            target="_blank"
            className="btn btn-sm btn-secondary text-white"
            rel="noreferrer"
          >
            Live
          </a>
          <a href={client} className="btn btn-sm btn-primary text-white">
            Client
          </a>
          <a href={server} className="btn btn-sm btn-primary text-white">
            Server
          </a>
        </div>
      </div>
      <Link to="/project/bookBuddy">
        <div className="bg-amber-400  text-center py-2 rounded-b-xl">
          Details
        </div>
      </Link>
    </div>
  );
};

export default BookBuddy;
