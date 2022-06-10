import React from "react";
import AutoZone from "./AutoZone/AutoZone";
import BookBuddy from "./BookBuddy/BookBuddy";
import ConventionCenter from "./ConventionCenter/ConventionCenter";

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto my-28 px-4">
      <h1 className="text-4xl text-primary font-bold py-12 text-center">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
        <AutoZone />
        <BookBuddy />
        <ConventionCenter />
      </div>
    </section>
  );
};

export default Projects;
