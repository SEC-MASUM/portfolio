import React from "react";

const project = {
  id: 3,
  title: "RoseView Convention Center",
  subtitle: "MERN Stack",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
  technologies: ["React", "Node", "Express", "Tailwind CSS"],
  coverPhoto:
    "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/convention-center.png",

  live: "https://sec-masum.github.io/convention-center-landing-page-bootstrap/",
  client:
    "https://github.com/SEC-MASUM/convention-center-landing-page-bootstrap",
};

const ConventionCenterDetails = () => {
  const { title, description, technologies, images } = project;
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-medium py-8 text-center">{title}</h1>
      <div>
        <p className="text-center max-w-2xl mx-auto">{description}</p>
      </div>
      <div>
        <ul className="flex text-center gap-8 px-8 py-4 text-2xl">
          <p className="space-x-3 space-y-3">
            {technologies.map((technology) => (
              <>
                <span className="inline-block border border-green-500 rounded-md p-2 whitespace-nowrap">
                  {technology}
                </span>
              </>
            ))}
          </p>
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images?.map((img) => (
          <div>
            <div className="mockup-window border bg-base-300">
              <div className="flex justify-center  bg-base-200">
                <figure className="bg-slate-600">
                  <img src={img.imageURL} alt="" className="" />
                </figure>
              </div>
            </div>
            <p className="text-2xl py-2 text-secondary text-center">
              {img.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConventionCenterDetails;
