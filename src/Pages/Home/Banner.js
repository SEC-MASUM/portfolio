import React from "react";
import photo from "../../assets/images/Profile-Picture.png";
import {FaCloudDownloadAlt} from "react-icons/fa"
const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="min-h-fit max-h-fit flex flex-col lg:flex-row py-12">
        <div className="flex-1 flex  items-center">
          <div className="px-6 py-12">
            <h4 className="text-3xl  font-medium text-green-500">Hello, I'm</h4>
            <h1 className="text-6xl font-bold pt-4">Md. Masum Billah</h1>
            <p className="text-2xl  py-4 text-violet-500">
              {" "}
              Full Stack Web Developer
            </p>
            {/* <p className="text-base py-8">
              I am a full-stack web developer. I love minimalism and I create
              web application using React. Feel free to contact me for any React
              projects you might have in mind.
            </p> */}
            <div className="flex items-center space-x-6">
              <a
                href="https://drive.google.com/file/d/1516clwC-JRrVQ5i8wDT2pJxcNMkBVuk9/view"
                target="_blank"
                className="btn btn-primary rounded-full text-white flex justify-between gap-2"
                rel="noreferrer"
              >
                Download Resume{" "}
                <FaCloudDownloadAlt className="h-6 w-6"></FaCloudDownloadAlt>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <figure>
            <img src={photo} class="max-w-sm" alt="" />
            {/* <img
              src="https://api.lorem.space/image/movie?w=260&h=400"
              class="max-w-sm rounded-lg shadow-2xl"
              alt=""
            /> */}
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Banner;
