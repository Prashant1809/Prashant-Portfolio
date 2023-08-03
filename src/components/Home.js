import React from "react";
import heroImg from "../assets/IMG_20221126_222140.jpg";
import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div
        class="max-w-screen-lg text-white mx-auto flex flex-col
       items-center justify-center h-full px-4 md:flex-row gap-3"
      >
        <div class="flex flex-col  justify-center md:w-1/2 md:pr-12">
          <h2 class="text-3xl sm:text-5xl font-bold text-white ">
            I am FrontEnd Developer
          </h2>
          <p class="text-gray-500 py-2">
            I am always energetic and eager to learn new skills. Multitasking
            ability, I am a quick learner and can work in flexible environmenyt .
            <br />
             I love to work on web applications using technologies like HTML,
            TailwindCSS, Javascript, ReactJS .
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              class="group  text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
             from-cyan-500 to-blue-500 md:justify-center "
            >
              Portfolio
              <span class="group-hover:rotate-90 duration-300">
                <HiArrowRight class="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div class="md:w-1/2">
          <img
            src={heroImg}
            alt="my profile pic"
            class="rounded-2xl mx-auto w-1/2 md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
