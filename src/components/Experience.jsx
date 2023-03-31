import React from "react"
import p from "../assets/p.png";
import css from "../assets/css.png";
import express from "../assets/express.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";


const Experience = () => {

const techs = [
{
    id : 1,
    src : html,
    title: 'HTML',
    style: 'shadow-orange-500'
},
{
    id : 2,
    src : css,
    title: 'CSS',
    style: 'shadow-blue-500'
},
{
    id : 3,
    src : javascript,
    title: 'JavaScript',
    style: 'shadow-yellow-500'
},
{
    id : 4,
    src : mongodb,
    title: 'MongoDb',
    style: 'shadow-green-500'
},
{
    id : 5,
    src : node,
    title: 'Node',
    style: 'shadow-green-500'
},
{
    id : 6,
    src : p,
    title: 'C++',
    style: 'shadow-blue-500'
},
{
    id : 7,
    src : react,
    title: 'React',
    style: 'shadow-blue-600'
},
{
    id : 8,
    src : tailwind,
    title: 'TailWind',
    style: 'shadow-sky-400'
},
{
    id : 9,
    src : github,
    title: 'Github',
    style: 'shadow-gray-400'
},
{
  id : 10,
  src : express,
  title: 'express',
  style: 'shadow-red-400'
},

]


    return (
        <div
          name="experience"
          className="bg-gradient-to-b from-gray-800 to-black w-full f-screen"
        >
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                Experience
              </p>
              <p className="py-6">These are the technologies I've worked with</p>
            </div>
    
            <div className="w-full  grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-05 duration-400 py-2 rounded-[500px] ${style}`}
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

export default Experience;
