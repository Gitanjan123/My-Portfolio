import React from 'react'
import { MdOutlineArrowRight } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import Gif from "../assets/Gif.gif";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black
    via-black to-gray-800">
      <div className="max-w-screen-lg p- mx-auto flex flex-col justify-center w-full h-full">
        <div className="text-2xl sm:text-3xl
        font-semiboldbold text-white">
            <h1>Gitanjan <span>Debnath</span></h1>
        </div>
        <div className="mb-6 justify-center text-[18px] lg:text-[40px]
        font-secondary font-semibold uppercase leading-[1]">
            <span className="text-white mr-4">I am a</span>
            <TypeAnimation 
            sequence={[
                'Web Developer',
                2000,
                'Mern Stack Developer',
                2000,
                'C Programmer',
                2000,
            ]}
            speed = {50}
            className='text-white'
            wrapper='span'
            repeat={Infinity}
            />
           
        </div>
        <p className="text-white py-4 max-w-4xl">
           Hello, I'm a Cse Undergraduate and a Web Developer with a fine knowledge of C and C++ programming and data Structure and algorithms and fine 
           knowledge about SQL. I love to do Coding and to develop websites that offer a great user experience, 
           and to leverage my skill set.
        </p>
        <div>
             <a href={"https://github.com/Gitanjan123"}>
                <button className= "group text-black font-extrabold w-fit  px-6 py-3 my-2
                flex items-center rounded-md bg-gradient-to-r
                from from-yellow-500 to-blue-500 cursor-pointer">
                    MY Portfolio
                    <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineArrowRight size={30} className= "ml-1"/> 
                    </span>
                    </button>
                    </a>
        </div>
        
  </div>
  
</div>
  );
};

export default Home;
