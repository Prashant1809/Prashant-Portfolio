import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const portfolios = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "REACT-JS",
      style: "shadow-cyan-500",
    },
    // {
    //   id: 5,
    //   src: nextjs,
    //   title: "NEXT-JS",
    //   style: "shadow-gray-200",
    // },
    // {
    //   id: 6,
    //   src: graphql,
    //   title: "GRAPHQL",
    //   style: "shadow-pink-500",
    // },
    {
      id: 7,
      src: github,
      title: "Git And Github",
      style: "shadow-gray-500",
    },
    {
      id: 8,
      src: tailwind,
      title: "TAILWIND CSS",
      style: "shadow-purple-500",
    },
  ];

  return (
    <div
      name="experience"
      className=" text-white w-full bg-gradient-to-b from-black to-gray-800 
      min-h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
       justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl  font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className=" w-full grid grid-cols-2 sm:grid-cols-3  gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, style, title }) => (
            <div
              key={id}
              className={`shadow-md shadow-gray-600 py-2 rounded-lg ${style} `}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-center">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
