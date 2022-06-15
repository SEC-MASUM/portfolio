import React from "react";

const project = {
  id: 3,
  title: "RoseView Convention Center",
  subtitle: "MERN Stack",
  description: "It is a convention center landing page build with bootstrap",
  technologies: ["HTML", "CSS", "Bootstrap"],
  coverPhoto:
    "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/convention-center.png",
  images: [
    {
      imageURL:
        "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/convention-center-banner.png",
      title: "Banner Section",
    },
    {
      imageURL:
        "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/convention-center-gallery.png",
      title: "Gallery Section",
    },
    {
      imageURL:
        "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/convention-center-our-package.png",
      title: "Our Package Section",
    },
    {
      imageURL:
        "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/convention-center-faq.png",
      title: "FAQ Section",
    },
  ],

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
