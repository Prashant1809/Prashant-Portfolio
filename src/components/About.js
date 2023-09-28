import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-20">
          <p className="text-4xl  font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          This is Prashant Chaudhary from kota I am final year student CSE
          student at mbm university I am skilled in react js and work on
          programming languages like c and c++ apart from my course work i have
          done my practical internships in Dmatics Technologies and Anktech
          Private Limited in Front end Web Development in which i Work on
          technologies like html ,css , tailwind-css javascript and react js
        </p>

        <br />

        <p className="text-xl">
          I am Focused and Quick Learner and capable to adopt new technologies i
          am tech freak want to explore new tech domain
        </p>
      </div>
    </div>
  );
};

export default About;
