import React from "react";
import { Link } from "react-router-dom";

const project = {
  id: 2,
  title: "Book Buddy",
  subtitle: "MERN Stack",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
  technologies: ["React", "Node", "Express", "Tailwind CSS"],
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
