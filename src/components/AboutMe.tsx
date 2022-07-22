import ts from "../../public/assets/exp-icons/ts.svg";
import js from "../../public/assets/exp-icons/js.svg";
import react from "../../public/assets/exp-icons/react.svg";
import node from "../../public/assets/exp-icons/node.svg";
import next from "../../public/assets/exp-icons/next.svg";
import graphql from "../../public/assets/exp-icons/graphql.svg";
import mysql from "../../public/assets/exp-icons/mysql.svg";
import psql from "../../public/assets/exp-icons/psql.svg";
import github from "../../public/assets/exp-icons/github.svg";
import Image from "next/future/image";

const icons = [react, ts, js, node, next, graphql, psql, mysql, github];

export const AboutMe = () => {
  return (
    <div className="flex flex-col mx-auto bg-white border-b border-black h-96 max-w-screen lg:text-left md:flex-row">
      <div className="flex flex-col justify-center w-full h-full min-w-0 border-r border-black md:justify-center ">
        <h2 className="mx-2 mt-24 text-md sm:mt-2 md:text-2xl md:w-[80%]">
          Hi I'm Darcy! I’m a self taught full stack developer, with a passion
          for creating good systems in code and life. I have a broad range of
          experience over many different technologies, specializing in web
          development.
        </h2>
        <div className="flex flex-row flex-wrap p-2 mt-2">
          {icons.map((icon, index) => (
            <Image
              src={icon}
              key={icon}
              alt="Headshot"
              className="w-10 h-10 pr-1 mr-1 cursor-pointer lg:w-14 lg:h-14 md:mr-3"
            />
          ))}
        </div>
      </div>
      <div className="min-w-[250px] "></div>
    </div>
  );
};
