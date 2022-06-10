import React from "react";

const About = () => {
  return (
    <div id="about" className="container mx-auto my-20">
      <h1 className="text-4xl text-primary font-bold py-8 text-center">
        About Me
      </h1>
      <div className="text-justify space-y-2 text-base max-w-2xl mx-auto">
        <p>
          Currently I am working with React JS, Express JS, MongoDB, NodeJS,
          Tailwind CSS and other trending web development technologies. My
          interests range from technology to photography.
        </p>
        <p>
          I have around one year working experience as a Junior Officer(IT) of
          the tech team in an organization of feed industry of Bangladesh.
        </p>
        <p>
          I'm graduate in CSE from Sylhet Engineering College (SEC), School of
          Applied Science & Technology, SUST. Currently living in Jashore,
          Khulna, Bangladesh.
        </p>
        <p>
          My interested fields are programming, web development, web designing,
          graphics designing, reading, traveling.
        </p>
      </div>
    </div>
  );
};

export default About;
