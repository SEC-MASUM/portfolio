import React from "react";
import reactProject from "../../assets/images/projects/ReactProject.PNG";
import bootstrapProject from "../../assets/images/projects/BootstrapProject.PNG";
import jsProject from "../../assets/images/projects/JSProject.PNG";

import autoZone from "../../assets/images/projects/auto-zone.png";
import bookBuddy from "../../assets/images/projects/book-buddy.png";
import conventionCenter from "../../assets/images/projects/convention-center.png";

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto my-28">
      <h1 className="text-4xl text-primary font-bold py-12 text-center">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
        <div className="border-2 rounded-xl">
          <h3 className="text-2xl font-medium py-2 text-center rounded-t-lg">
            Auto Zone
          </h3>
          <figure className="">
            <img
              src={autoZone}
              alt=""
              className="object-cover object-top hover:object-bottom transition-all duration-[4000ms] ease-linear  w-full h-[400px] cursor-pointer"
            />
          </figure>
          <div className="">
            <div className="flex justify-center gap-3 py-3">
              <button className="btn btn-sm btn-secondary text-white">
                Live
              </button>
              <button className="btn btn-sm btn-primary text-white">
                Client
              </button>
              <button className="btn btn-sm btn-primary text-white">
                Server
              </button>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-xl">
          <h3 className="text-2xl font-medium py-2 text-center rounded-t-lg">
            Book Buddy
          </h3>
          <figure className="">
            <img
              src={bookBuddy}
              alt=""
              className="object-cover object-top hover:object-bottom transition-all duration-[4000ms] ease-linear  w-full h-[400px] cursor-pointer"
            />
          </figure>
          <div className="">
            <div className="flex justify-center gap-3 py-3">
              <button className="btn btn-sm btn-secondary text-white">
                Live
              </button>
              <button className="btn btn-sm btn-primary text-white">
                Client
              </button>
              <button className="btn btn-sm btn-primary text-white">
                Server
              </button>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-xl">
          <h3 className="text-2xl font-medium py-2 text-center rounded-t-lg">
            Convention Center
          </h3>
          <figure className="">
            <img
              src={conventionCenter}
              alt=""
              className="object-cover object-top hover:object-bottom transition-all duration-[4000ms] ease-linear  w-full h-[400px] cursor-pointer"
            />
          </figure>
          <div className="">
            <div className="flex justify-center gap-3 py-3">
              <button className="btn btn-sm btn-secondary text-white">
                Live
              </button>
              <button className="btn btn-sm btn-primary text-white">
                Client
              </button>
              <button className="btn btn-sm btn-primary text-white">
                Server
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section id="projects">
    //   <div className="container mx-auto">
    //     <div className="min-h-fit max-h-fit bg-white">
    //       <div className="">
    //         <div className="px-6 py-12">
    //           <h1 className="text-4xl text-primary font-bold pt-4 text-center">
    //             My Projects
    //           </h1>
    //           <div className="place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-center py-8">
    //             {/* -------------------Project Bootstrap------------ */}
    //             <div
    //               className="hero group  bg-white w-full h-72 min-h-fit max-w-xs md:max-w-sm   rounded-xl  shadow-lg "
    //               style={{
    //                 backgroundImage: `url(${bootstrapProject})`,
    //                 backgroundRepeat: "no-repeat",
    //                 backgroundSize: "cover",
    //                 backgroundPosition: "center",
    //               }}
    //             >
    //               <div className="hero-overlay rounded-xl group-hover:bg-opacity-90 bg-gray-800 bg-opacity-0"></div>
    //               <div className="hidden group-hover:block hero-content text-center text-white space-y-4">
    //                 <p className="text-2xl">Bootstrap Project</p>
    //                 <div className="space-x-3">
    //                   <a
    //                     href="https://convention-center-landing-page-bootstrap.netlify.app/"
    //                     className="btn btn-sm"
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                   >
    //                     Preview
    //                   </a>
    //                   <a
    //                     href="https://github.com/SEC-MASUM/convention-center-landing-page-bootstrap"
    //                     className="btn btn-sm"
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                   >
    //                     Source
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //             {/* ------------------------------------- */}
    //             {/* -------------------Project JS------------ */}
    //             <div
    //               className="hero group  bg-white w-full h-72 min-h-fit max-w-xs md:max-w-sm   rounded-xl  shadow-lg "
    //               style={{
    //                 backgroundImage: `url(${jsProject})`,
    //                 backgroundRepeat: "no-repeat",
    //                 backgroundSize: "cover",
    //                 backgroundPosition: "center",
    //               }}
    //             >
    //               <div className="hero-overlay rounded-xl group-hover:bg-opacity-90 bg-gray-800 bg-opacity-0"></div>
    //               <div className="hidden group-hover:block hero-content text-center text-white space-y-4">
    //                 <p className="text-2xl">Javascript Project</p>
    //                 <div className="space-x-3">
    //                   <a
    //                     href="https://money-expense-manager.netlify.app/"
    //                     className="btn btn-sm"
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                   >
    //                     Preview
    //                   </a>
    //                   <a
    //                     href="https://github.com/SEC-MASUM/money-master"
    //                     className="btn btn-sm"
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                   >
    //                     Source
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //             {/* ------------------------------------- */}
    //             {/* -------------------Project React------------ */}
    //             <div
    //               className="hero group  bg-white w-full h-72 min-h-fit max-w-xs md:max-w-sm   rounded-xl  shadow-lg "
    //               style={{
    //                 backgroundImage: `url(${reactProject})`,
    //                 backgroundRepeat: "no-repeat",
    //                 backgroundSize: "cover",
    //                 backgroundPosition: "center",
    //               }}
    //             >
    //               <div className="hero-overlay rounded-xl group-hover:bg-opacity-90 bg-gray-800 bg-opacity-0"></div>
    //               <div className="hidden group-hover:block hero-content text-center text-white space-y-4">
    //                 <p className="text-2xl">React Project</p>
    //                 <div className="space-x-3">
    //                   <a
    //                     href="https://book-buddy01.web.app/"
    //                     className="btn btn-sm"
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                   >
    //                     Preview
    //                   </a>
    //                   <a
    //                     href="https://github.com/SEC-MASUM/book-buddy-client"
    //                     className="btn btn-sm"
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                   >
    //                     Source
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //             {/* ------------------------------------- */}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Projects;
