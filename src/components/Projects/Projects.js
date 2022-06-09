import React from "react";
import reactProject from "../../assets/images/projects/ReactProject.PNG";
import bootstrapProject from "../../assets/images/projects/BootstrapProject.PNG";
import jsProject from "../../assets/images/projects/JSProject.PNG";

const Projects = () => {
  return (
    <div className="container mx-auto">
      <div className="min-h-fit max-h-fit bg-white">
        <div className="">
          <div className="px-6 py-12">
            <h1 className="text-4xl text-primary font-bold pt-4 text-center">My Projects</h1>
            <div className="place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-center py-8">
              {/* -------------------Project Bootstrap------------ */}
              <div
                className="hero group  bg-white w-full h-72 min-h-fit max-w-xs md:max-w-sm   rounded-xl  shadow-lg "
                style={{
                  backgroundImage: `url(${bootstrapProject})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="hero-overlay rounded-xl group-hover:bg-opacity-90 bg-gray-800 bg-opacity-0"></div>
                <div className="hidden group-hover:block hero-content text-center text-white space-y-4">
                  <p className="text-2xl">Bootstrap Project</p>
                  <div className="space-x-3">
                    <a
                      href="https://convention-center-landing-page-bootstrap.netlify.app/"
                      className="btn btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Preview
                    </a>
                    <a
                      href="https://github.com/SEC-MASUM/convention-center-landing-page-bootstrap"
                      className="btn btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>
              {/* ------------------------------------- */}
              {/* -------------------Project JS------------ */}
              <div
                className="hero group  bg-white w-full h-72 min-h-fit max-w-xs md:max-w-sm   rounded-xl  shadow-lg "
                style={{
                  backgroundImage: `url(${jsProject})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="hero-overlay rounded-xl group-hover:bg-opacity-90 bg-gray-800 bg-opacity-0"></div>
                <div className="hidden group-hover:block hero-content text-center text-white space-y-4">
                  <p className="text-2xl">Javascript Project</p>
                  <div className="space-x-3">
                    <a
                      href="https://money-expense-manager.netlify.app/"
                      className="btn btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Preview
                    </a>
                    <a
                      href="https://github.com/SEC-MASUM/money-master"
                      className="btn btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>
              {/* ------------------------------------- */}
              {/* -------------------Project React------------ */}
              <div
                className="hero group  bg-white w-full h-72 min-h-fit max-w-xs md:max-w-sm   rounded-xl  shadow-lg "
                style={{
                  backgroundImage: `url(${reactProject})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="hero-overlay rounded-xl group-hover:bg-opacity-90 bg-gray-800 bg-opacity-0"></div>
                <div className="hidden group-hover:block hero-content text-center text-white space-y-4">
                  <p className="text-2xl">React Project</p>
                  <div className="space-x-3">
                    <a
                      href="https://book-buddy01.web.app/"
                      className="btn btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Preview
                    </a>
                    <a
                      href="https://github.com/SEC-MASUM/book-buddy-client"
                      className="btn btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>
              {/* ------------------------------------- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
