import React from "react";
import { Link } from "react-router-dom";

const project = {
  id: 3,
  title: "RoseView Convention Center",
  subtitle: "MERN Stack",
  description: "It is a convention center landing page build with bootstrap",
  technologies: ["HTML", "CSS", "Bootstrap"],
  coverPhoto:
    "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/convention-center.png",

  live: "https://sec-masum.github.io/convention-center-landing-page-bootstrap/",
  client:
    "https://github.com/SEC-MASUM/convention-center-landing-page-bootstrap",
};

const ConventionCenter = () => {
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
      <Link to="/project/conventionCenter">
        <div className="bg-amber-400  text-center py-2 rounded-b-xl">
          Details
        </div>
      </Link>
    </div>
  );
};

export default ConventionCenter;
