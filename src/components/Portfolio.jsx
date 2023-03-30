import React from "react";
import arrayDestructure from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import yelpcamp from "../assets/portfolio/yelpcamp.png";
import burger from "../assets/portfolio/burger.jpg";
import port from "../assets/portfolio/port.jpg";

const Portfolio = () => {

    const portfolios = [
        {id:1, src:port},
        {id:2, src:arrayDestructure},
        {id:3, src: burger},
        {id:4, src: navbar},
        {id:5, src: yelpcamp},
        {id:6, src: reactParallax},
        {id:7, src: reactSmooth},
        {id:8, src: installNode},
        {id:9, src: reactWeather},
    ]


  return (
    <div name="portfolio"
         className="pt-10 pb-10 bg-gradient-to-b from-black to-gray-800 w-full text-white h-auto">
     <div className=" max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
            <p className="py-6 text-xl">A small gallary of projects chosen by me. I've done them all together with amazing people from companies.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(port => (
            <div key={port.id}  className="shadow-md shadow-gray-600 rounded-lg">
                <img src={port.src} alt="" />
                <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                        Demo
                    </button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                        Code
                    </button>
                </div>
            </div>
            
        ))}
        </div>
        </div>
    </div>
  )
}

export default Portfolio