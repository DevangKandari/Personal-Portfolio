import React from "react";
import SectionTitle from "./SectionTitle";
import Project1 from "../assets/images/Projects/Project1.png";
import Project2 from "../assets/images/Projects/Project2.png";
import Project3 from "../assets/images/Projects/Project3.png";

import { TbBrandGithub } from "react-icons/tb";

const Projects = () => {
  return (
    <section id="projects" className="max-w-[1440px] mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some of my projects" titleNumber="03" />

      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/DevangKandari/Personal-Portfolio"
              target="_blank"
            >
              <div>
                <img
                  className="w-full h-full object-contain hover:-translate-y-3 duration-300"
                  src={Project1}
                  alt="Project1"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <div className="flex flex-col gap-2">
                <p className="font-titlefont text-textBlue text-sm tracking-wide">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">Personal Portfolio</h3>
              </div>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                A personal portfolio built using React and styled with Tailwind
                CSS, drawing inspiration from the stunning portfolio designed by
                Noor Mohammad. This project showcases my skills, experiences,
                and projects in a visually appealing and interactive manner.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li className="hover:text-textBlue cursor-default"> React </li>
                <li className="hover:text-textBlue cursor-default">
                  {" "}
                  Tailwind CSS{" "}
                </li>
                <li className="hover:text-textBlue cursor-default">
                  {" "}
                  Javascript{" "}
                </li>
                <li className="hover:text-textBlue cursor-default"> CSS </li>
                <li className="hover:text-textBlue cursor-default">
                  {" "}
                  Vercel Deployment{" "}
                </li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/DevangKandari/Personal-Portfolio"
                  target="_blank"
                  className="hover:text-textBlue duration-300"
                  rel="noreferrer"
                >
                  <TbBrandGithub />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/DevangKandari/AI_Course_Generator"
              target="_blank"
            >
              <div>
                <img
                  className="w-full h-full object-contain hover:-translate-y-3 duration-300"
                  src={Project2}
                  alt="Project1"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap- lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <div className="flex flex-col gap-2">
                <p className="font-titlefont text-textBlue text-sm tracking-wide">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">AI Course Generator</h3>
              </div>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                The AI Course Generator is a web application that leverages
                Gemini’s GPT API to dynamically generate personalized course
                syllabi based on user-inputted topics. Users can input any
                subject or concept, and the tool instantly produces a structured
                course outline with modules, descriptions, and learning
                objectives. Built using the MERN stack, the app uses React for
                the frontend, Node.js and Express for the backend, and
                DrizzleORM for data storage. It also integrates Cloudinary to
                efficiently handle course image uploads. This project showcases
                my ability to blend AI with practical web development to create
                dynamic and user-driven learning tools.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li className="hover:text-textBlue cursor-default"> NextJS </li>
                <li className="hover:text-textBlue cursor-default">
                  {" "}
                  PostgreSQL{" "}
                </li>
                <li className="hover:text-textBlue cursor-default">
                  {" "}
                  TailwindCSS{" "}
                </li>
                <li className="hover:text-textBlue cursor-default">
                  {" "}
                  Vercel Deployment{" "}
                </li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/DevangKandari/AI_Course_Generator"
                  target="_blank"
                  className="hover:text-textBlue duration-300"
                >
                  <TbBrandGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
