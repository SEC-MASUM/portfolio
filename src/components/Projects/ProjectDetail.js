import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const [projectDetail, setProjectDetail] = useState({});
  // const { id } = useParams();

  // useEffect(() => {
  //   const project = projects.find((project) => project.id === parseInt(id));
  //   setProjectDetail(project);
  //   // fetch("/projectsData.json", {
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //     Accept: "application/json",
  //   //   },
  //   // })
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     const project = data.find((project) => project.id === parseInt(id));
  //   //     setProjectDetail(project);
  //   //     console.log(data);
  //   //   });
  // }, [id]);

  const { title, description, technologies, images } = projectDetail;
  // console.log(technologies);
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
        {images.map((img) => (
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

export default ProjectDetail;
