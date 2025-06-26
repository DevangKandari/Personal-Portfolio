import React from "react";
import SectionTitle from "./SectionTitle";

import { SiAxios, SiExpress, SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { DiCss3, DiHtml5 } from "react-icons/di";
import { FaReact } from "react-icons/fa";

import { DiCode } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import profile from "../assets/images/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-[1024px] mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNumber="01" />
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hi 👋 My name is Devang Kandari from Ghaziabad, Uttar Pradesh and
            I'm a fourth-year Computer Science student at the
            <span className="text-textBlue">
              {" "}
              Graphic Era Hill University, Bhimtal, Uttarakhand.
            </span>{" "}
            My journey into the world of programming began in school, driven by
            an early curiosity to understand how software works and a deep
            desire to build cool things from scratch.
          </p>
          <p>
            What started with experimenting in C++ and basic game logic
            gradually evolved into a strong interest in areas like Web
            Development, System Design, Data Structures & Algorithms, and
            Machine Learning. Over time, I've dabbled in everything from
            building full-stack web apps and automating everyday tasks, to
            diving deep into competitive programming.
          </p>

          <p>
            I've had the opportunity to work on several meaningful personal
            projects, collaborate with peers on open-source tools, and actively
            participate in coding contests on platforms like CodeChef, LeetCode,
            and Codeforces — all of which helped me strengthen my
            problem-solving and software development skills. Beyond coding, I’ve
            contributed to student communities, taken part in hackathons, and
            embraced roles that let me share knowledge and mentor others.
          </p>

          <p> Here are a few technologies I have worked with in the past:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6">
            <li className="flex items-center gap-2">
              {" "}
              <span className="text-textBlue">
                {" "}
                <SiJavascript />{" "}
              </span>{" "}
              JavaScript{" "}
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span className="text-textBlue">
                {" "}
                <DiCss3 />{" "}
              </span>{" "}
              CSS{" "}
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span className="text-textBlue">
                {" "}
                <DiHtml5 />{" "}
              </span>{" "}
              HTML{" "}
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span className="text-textBlue">
                {" "}
                <SiTailwindcss />{" "}
              </span>{" "}
              Tailwind CSS{" "}
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span className="text-textBlue">
                {" "}
                <FaReact />{" "}
              </span>{" "}
              ReactJS{" "}
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span className="text-textBlue">
                {" "}
                <DiCode />{" "}
              </span>{" "}
              C{" "}
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span className="text-textBlue">
                {" "}
                <DiCode />{" "}
              </span>{" "}
              C++{" "}
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span className="text-textBlue">
                {" "}
                <SiExpress />{" "}
              </span>{" "}
              Express{" "}
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span className="text-textBlue">
                {" "}
                <SiAxios />{" "}
              </span>{" "}
              Axios{" "}
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span className="text-textBlue">
                {" "}
                <FaNodeJs />{" "}
              </span>{" "}
              NodeJs{" "}
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className=" w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0 -left-6">
              <img
                className="rounded-lg h-full object-cover"
                src={profile}
                alt="profile"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textBlue/10 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
            <div className="hidden lgl:inline-flex w-full h-80 -mt-72 border-2 border-textBlue rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
