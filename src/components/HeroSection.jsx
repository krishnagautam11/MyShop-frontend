import React from "react";
import main from "../assets/main.png";
import bgStyles from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <section className={`${bgStyles.heroSection} bg-gray-200 py-11 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between`}>
      <div className={`max-w-xl mb-10 md:mb-0`}>
        <h1 className={` text-4xl md:text-7xl font-bold  ${bgStyles.title}`}>
          Discover Your Style
        </h1>
        <p className={` text-xl text-gray-700 py-8 ${bgStyles.description}`}>Find the best deals on trending fashion and accessories</p>
        <button className={`mb-9 text-xl bg-black text-white rounded-full hover:bg-purple-800  px-6 py-4 shadow-2xl transition delay-80 duration-600 ease-in ${bgStyles.button}`}>Shop Now</button>
      </div>
      <div className={`w-full md:w-1/2 lg:w-2/5 ${bgStyles.imageContainer}`}>
        <img
          src={main}
          alt="Featured Product"
          className={`rounded-xl shadow-lg w-full h-auto object-cover ${bgStyles.featuredImage}`}
        />
      </div>
    </section>
  );
};