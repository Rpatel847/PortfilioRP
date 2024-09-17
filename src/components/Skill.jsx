import React from 'react'
import { BiData } from 'react-icons/bi'
import { DiJava, DiJavascript, DiPhp, DiPython } from 'react-icons/di'
import { FaOsi } from 'react-icons/fa'
import { SiC, SiCplusplus, SiCss3, SiHtml5, SiMysql, SiPhp } from 'react-icons/si'


const Skill = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Skills & Languages</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl  border-neutral-800 p-4">
           <SiC className="text-7xl text-blue-500"/> 
           <p className="my-4 text-center text-2xl">C</p>
          
        </div>
        <div className="rounded-2xl  border-neutral-800 p-4">
           <SiCplusplus className="text-7xl text-blue-200 "/> 
           <p className="my-4 text-center text-2xl">C++</p>
        </div>
        <div className="rounded-2xl  border-neutral-800 p-4">
           <DiJava className="text-7xl text-red-400 "/> 
           <p className="my-4 text-center text-2xl">JAVA</p>
        </div>
        <div className="rounded-2xl  border-neutral-800 p-4">
           <DiJavascript className="text-7xl text-yellow-600 "/> 
           <p className="my-4 text-center text-2xl">JavaScript</p>
        </div>
        <div className="rounded-2xl  border-neutral-800 p-4">
           <DiPython className="text-7xl text-yellow-300 "/> 
           <p className="my-4 text-center text-2xl">Python</p>
        </div>
        <div className="rounded-2xl  border-neutral-800 p-4">
           <SiPhp className="text-7xl text-cyan-500 "/> 
           <p className="my-4 text-center text-2xl">Php</p>
        </div>
        <div className="rounded-2xl  border-neutral-800 p-4">
           <SiHtml5 className="text-7xl text-orange-800 "/> 
           <p className="my-4 text-center text-2xl">HTML5</p>
        </div>
        <div className="rounded-2xl  border-neutral-800 p-4">
           <SiCss3 className="text-7xl text-blue-300 "/> 
           <p className="my-4 text-center text-2xl">CSS</p>
        </div>
        <div className="rounded-2xl  border-neutral-800 p-4">
           <SiMysql className="text-7xl text-orange-500 "/> 
           <p className="my-4 text-2xl">MySQL</p>

          
        </div>
        <div className="rounded-2xl  border-neutral-800 p-4">
           <BiData className="text-7xl text-blue-400 "/> 
           <p className="my-4 text-2xl">DBMS</p>
           
          
        </div>
       
       
        
      
      </div>
    </div>
  )
}

export default Skill
