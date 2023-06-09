import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb-1.png";
import firebase from "../assets/firebase.png";
import bootstrap from "../assets/bootstrap.png";
import reactNative from "../assets/newnative.png";


const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: bootstrap,
            title: "Bootstrap",
            style: "shadow-purple-600"
        },
        {
            id: 4,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-cyan-800"
        },
        {
            id: 5,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-600"
        },
        {
            id: 6,
            src: node,
            title: "Nodejs",
            style: "shadow-lime-600"
        },
        {
            id: 7,
            src: mongodb,
            title: "MongoDB",
            style: "shadow-lime-900"
        },

        {
            id: 8,
            src: reactImage,
            title: "React",
            style: "shadow-cyan-300"
        },
        
        
        {
            id: 9,
            src: firebase,
            title: "Firebase",
            style: "shadow-yellow-400"
        },
        {
            id: 10,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400"
        },
        {
            id: 11,
            src: reactNative,
            title: "React Native...",
            style: "shadow-cyan-300"
        },
    ]



  return (
    <div name="experience"
         className="pt-10 pb-2 bg-gradient-to-b from-gray-800 to-black w-full h-auto  ">
        <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                    Experience
                </p>
                <p className="py-5 text-xl">
                    Here are the technologies i've worked with.
                </p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {techs.map(tech => (
                    <div key={tech.id} 
                         className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style}`}>
                    <img src={tech.src} alt="" className="w-20 mx-auto" />
                    <p className="mt-4">{tech.title}</p>
                </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Experience