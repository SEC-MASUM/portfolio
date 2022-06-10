import React from "react";
import { VscJson } from "react-icons/vsc";
import {
  SiJsonwebtokens,
  SiNetlify,
  SiStripe,
  SiReactrouter,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto px-5">
      <h1 className="text-4xl text-primary font-bold pt-4 text-center">
        Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="bg-emerald-100 rounded-xl">
          <h1 className="text-3xl bg-slate-700 rounded-t-xl text-white font-medium py-4 text-center">
            Frontend Technologies
          </h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-8 py-4 ">
            <li className="flex items-center gap-4 text-2xl">
              <i className="devicon-javascript-plain"></i>
              <p>JavaScript</p>
            </li>
            <li className="flex items-center gap-4 text-2xl">
              <i className="devicon-react-original"></i>
              <p>ReactJs</p>
            </li>
            <li className="flex items-center gap-4 text-2xl">
              <i className="devicon-html5-plain"></i>
              <p>HTML</p>
            </li>
            <li className="flex items-center gap-4 text-2xl">
              <i className="devicon-css3-plain"></i>
              <p>CSS</p>
            </li>
            <li className="flex items-center gap-4 text-2xl">
              <i className="devicon-tailwindcss-plain"></i>
              <p>Tailwind CSS</p>
            </li>
            <li className="flex items-center gap-4 text-2xl">
              <i className="devicon-bootstrap-plain"></i>
              <p>Bootstrap</p>
            </li>

            <li className="flex items-center gap-4 text-2xl">
              <SiReactrouter />
              <p>React Router</p>
            </li>
            <li className="flex items-center gap-4 text-2xl">
              <TbBrandReactNative />
              <p>React Query</p>
            </li>
          </ul>
        </div>
        <div className="bg-amber-100 rounded-xl">
          <h1 className="text-3xl bg-slate-700 rounded-t-xl text-white font-medium py-4 text-center">
            Backend Technologies
          </h1>
          <ul className="l grid grid-cols-1 sm:grid-cols-2 gap-8 px-8 py-4 ">
            <li className="flex items-center gap-4 text-2xl">
              <i className="devicon-express-original"></i>
              <p>ExpressJs</p>
            </li>
            <li className="flex items-center gap-4 text-2xl">
              <i className="devicon-nodejs-plain"></i>
              <p>NodeJs</p>
            </li>
            <li className="flex items-center gap-4 text-2xl">
              <i className="devicon-mongodb-plain"></i>
              <p>MongoDB</p>
            </li>
            <li className="flex items-center gap-4 text-2xl">
              <VscJson />
              <p>Rest API</p>
            </li>
            <li className="flex items-center gap-4 text-2xl">
              <SiJsonwebtokens />
              <p>JSON Web Token</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-red-100 rounded-xl my-8">
        <h1 className="text-3xl bg-slate-700 rounded-t-xl text-white font-medium py-4 text-center">
          Others
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-4 ">
          <li className="flex items-center gap-4 text-2xl">
            <i className="devicon-git-plain"></i>
            <p>Git</p>
          </li>
          <li className="flex items-center gap-4 text-2xl">
            <i className="devicon-github-original"></i>
            <p>GitHub</p>
          </li>
          <li className="flex items-center gap-4 text-2xl">
            <i className="devicon-firebase-plain"></i>
            <p>Firebase (Authentication)</p>
          </li>
          <li className="flex items-center gap-4 text-2xl">
            <i className="devicon-firebase-plain"></i>
            <p>Firebase (Hosting)</p>
          </li>
          <li className="flex items-center gap-4 text-2xl">
            <SiNetlify />
            <p>Netlify</p>
          </li>
          <li className="flex items-center gap-4 text-2xl">
            <i className="devicon-heroku-original"></i>
            <p>Heroku</p>
          </li>
          <li className="flex items-center gap-4 text-2xl">
            <i className="devicon-figma-plain"></i>
            <p>Figma</p>
          </li>
          <li className="flex items-center gap-4 text-2xl">
            <i className="devicon-photoshop-plain"></i>
            <p>Adobe Photoshop</p>
          </li>
          <li className="flex items-center gap-4 text-2xl">
            <i className="devicon-illustrator-plain"></i>
            <p>Adobe Illustrator</p>
          </li>
          <li className="flex items-center gap-4 text-2xl">
            <i className="devicon-canva-original"></i>
            <p>Canva</p>
          </li>

          <li className="flex items-center gap-4 text-2xl">
            <i className="devicon-tortoisegit-plain"></i>
            <p>Tortoise Git</p>
          </li>

          <li className="flex items-center gap-4 text-2xl">
            <SiStripe />
            <p>Stripe</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
