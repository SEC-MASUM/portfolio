import React from "react";
import { Link } from "react-router-dom";

const project = {
  id: 1,
  title: "Auto Zone",
  subtitle: "MERN Stack",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
  technologies: ["React", "Node", "Express", "Tailwind CSS"],
  coverPhoto:
    "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/auto-zone.png",
  images: [
    {
      imageURL:
        "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/auto-zone-add-product.png",
      title: "Add Product Page",
    },
    {
      imageURL:
        "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/auto-zone-manage-orders.png",
      title: "Manage Orders Page",
    },
    {
      imageURL:
        "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/auto-zone-purchase.png",
      title: "Product Purchase Page",
    },
    {
      imageURL:
        "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/auto-zone-user-role.png",
      title: "Manage User Role Page",
    },
  ],
  live: "https://auto-zone-01.web.app/",
  client: "https://github.com/SEC-MASUM/auto-zone-client",
  server: "https://github.com/SEC-MASUM/auto-zone-server",
};

const AutoZone = () => {
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
      <Link to="/project/autoZone">
        <div className="bg-amber-400  text-center py-2 rounded-b-xl">
          Details
        </div>
      </Link>
    </div>
  );
};

export default AutoZone;
