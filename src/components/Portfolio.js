import React from "react";
import weather from "../assets/portfolio/weather.png";
import discord from "../assets/portfolio/discord.png";
import pcfitness from "../assets/portfolio/pcfitness.png";
import password from "../assets/portfolio/password.png";
import pdrive from "../assets/portfolio/pdrive.png";
import todolist from "../assets/portfolio/todolist.png";

const Portfolio = () => {
  // const portfolios = [
  //   {
  //     id: 1,
  //     src: arrayDestruct,
  //     href: "https://www.linkedin.com/in/prashant-chaudhary-339a53201",
  //   },
  //   {
  //     id: 2,
  //     src: reactParallax,
  //   },
  //   {
  //     id: 3,
  //     src: navbar,
  //   },
  //   {
  //     id: 4,
  //     src: reactSmooth,
  //   },
  //   {
  //     id: 5,
  //     src: installNode,
  //   },
  //   {
  //     id: 6,
  //     src: reactWeather,
  //   },
  // ];
  return (
    <div
      name="portfolio"
      className=" text-white w-full bg-gradient-to-b from-black
       to-gray-800 md:min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl  font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check Out Some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {/* 1 */}
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={weather}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://apnamausamapp.netlify.app/"> Demo</a>
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://github.com/Prashant1809/Weather_App">Code</a>
              </button>
            </div>
          </div>
          {/* 2 */}
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={discord}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://discordcom.netlify.app/"> Demo</a>
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://github.com/Prashant1809/DiscordClone">Code</a>
              </button>
            </div>
          </div>

          {/* 3 */}

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={todolist}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://todolistwork.netlify.app/"> Demo</a>
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://github.com/Prashant1809/Todo_list-App">Code</a>
              </button>
            </div>
          </div>

          {/* 4 */}

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={password}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://securepasswordgeneratorforyou.netlify.app/">
                  {" "}
                  Demo
                </a>
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://github.com/Prashant1809/Password_generator">
                  Code
                </a>
              </button>
            </div>
          </div>

          {/* 5 */}

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={pcfitness}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://chaudharyfitnesss.netlify.app/"> Demo</a>
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://chaudharyfitnesss.netlify.app/">Code</a>
              </button>
            </div>
          </div>

          {/* 6 */}

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={pdrive}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://np-drive.netlify.app/"> Demo</a>
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href="https://github.com/Prashant1809/P-Drive">Code</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
