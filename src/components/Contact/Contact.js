import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="container  mx-auto">
        <h1 className="text-4xl text-primary font-bold pt-4 text-center">
          Contact Me
        </h1>
        <div className="px-5 py-10 flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.7)" }}
              src="https://www.google.com/maps/embed/v1/place?q=23.17385,+89.20138&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-gray-400">
                  Shahid Moshiur Rahman Road <br />
                  Old Kasba, Jashore-7400, Bangladesh
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-400 leading-relaxed">
                  masum.jess42@email.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed text-gray-400">
                  +880 1680 262295
                </p>
              </div>
            </div>
          </div>
          <form
            action="https://formsubmit.co/masum.jess42@gmail.com"
            method="POST"
            name="contact"
            className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-4 mt-8 md:mt-0"
          >
            <h2 className=" sm:text-4xl text-3xl mb-1 font-medium title-font">
              I Want To Hear From You
            </h2>
            <p className="leading-relaxed mb-5">
              Please fill out the form on this section to contact with me. Or
              call between 9:00 a.m. and 8:00 p.m.
            </p>
            <input
              type="hidden"
              name="_subject"
              value="New submission!"
            ></input>
            <div className="relative mb-4">
              <label htmlFor="name" className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="input input-bordered input-primary w-full text-green-500 text-base font-medium"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input input-bordered input-primary w-full text-green-500 text-base font-medium"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                id="message"
                name="message"
                className="textarea textarea-bordered h-24 textarea-primary w-full text-green-500 text-base font-medium"
                required
              />
            </div>
            <input type="hidden" name="_template" value="table"></input>
            <button type="submit" className="text-white btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
