import React from "react";
import { FaGit, FaLinux, FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiVisualstudiocode } from "react-icons/si";
import { VscCode } from "react-icons/vsc";


const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies/Framework</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
           <FaGit className="text-7xl text-red-400"/> 
          
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
           <FaGithub className="text-7xl text-green-300 "/> 
          
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
           <FaLinux className="text-7xl text-white-400 "/> 
          
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
           <SiVisualstudiocode className="text-7xl text-blue-500 "/> 
          
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
           <FaReact className="text-7xl text-cyan-500 "/> 
          
        </div>
       
        
      
      </div>
    </div>
  );
};

export default Tech;
