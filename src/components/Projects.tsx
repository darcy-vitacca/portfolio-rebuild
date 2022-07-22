import Image from "next/future/image";
import { FC } from "react";
import { IProjectProps, projectData } from "../utils/projects";
import { AboutTextScroller } from "./Scroller";
import { nanoid } from 'nanoid'



export const Projects = () => {
  return (
  <>
      <div className="flex justify-between h-24 mx-auto border-b border-black max-w-screen lg:text-left">
        <div className="flex items-end justify-start w-full border-r border-black"></div>
        <div className="min-w-[250px] bg-main-600 "></div>
      </div>
      <div
        className="flex flex-col justify-between h-40 mx-auto bg-white border-b border-l border-black max-w-screen lg:text-left lg:flex-row"
        id="projects"
      >
        <div className="flex flex-col w-full min-w-0 border-r border-black">
          <AboutTextScroller />
          <h1 className="w-full px-2 pt-2 pr-6 text-center text-black text-7xl md:text-8xl md:text-right">
            Projects
          </h1>
          <div className="min-w-[250px] bg-main-600"></div>
        </div>
      </div>
        {projectData.map((project: [IProjectProps, IProjectProps]) => (
        <div key={nanoid()} className="flex flex-col items-center justify-center w-full p-4 py-6 2xl:flex-row ">
          <Project  {...project[0]}/>
          <Project  {...project[1]}/>
          </div>
          ))}
    </>
  );
};


export const Project :FC<IProjectProps> = ({img, text, tech, header}) => {
  return (
    <div className="flex flex-col px-3 py-5 md:flex-row">
      <Image
        src={img}
        alt="Recipe Lab"
        className="md:mr-3 max-w-[550px] w-full"
      />
      <div className="w-full max-w-[550px]">
        <h1 className="mt-2 mb-2 text-2xl font-bold md:mt-0">{header}</h1>
        <p>
         {text}
        </p>

        <p className="mt-2 text-sm italic font-bold">
         {tech}
        </p>
      </div>
    </div>
  );
};

