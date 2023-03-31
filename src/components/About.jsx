import React from "react";
import Profile from '../assets/Profile.png'
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <p className="text-5xl font-bold inline border-b-6 border-gray-500">
            _About_
          </p>
        </div>
        <div>
            <img src={Profile} alt="my Profile" 
            className="rounded-3xl mx-auto w-1/3 "/>
        </div>
        <p className="text-xl mt-20">
          Hi!! Here me as Gitanjan Debnath, a web developer in my third year of studies, eager to begin my career in the industry. I am very passionate 
          about creating clean websites that will deliver a great user experience. I am constantly learning and staying up-to-date with the latest technologies
          to grow my skills and offer the best possible solution.
        </p>
      </div>
    </div>
  );
};

export default About;