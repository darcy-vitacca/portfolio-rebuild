import Image from "next/future/image";
import { AboutTextScroller } from "./Scroller";
import recipelab from "../../public/assets/recipelab.svg";

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
      <ProjectRow />
      <ProjectRow />
      <ProjectRow />
    </>
  );
};

export const ProjectRow = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 py-6 2xl:flex-row ">
      <Project />
      <Project />
    </div>
  );
};

export const Project = () => {
  return (
    <div className="flex flex-col p-3 md:flex-row">
      <Image
        src={recipelab}
        alt="Recipe Lab"
        className="cursor-pointer md:mr-3 max-w-[550px] w-full"
      />
      <div className="w-full p-4 max-w-[550px]">
        <p>
          RecipeLab is a recipe sharing platform that allows anyone to share and
          store their/others recipes online. Recipes are posted daily and can be
          upvoted and commented and saved to your recipe book, so you never lose
          a recipe again. You can also search through all recipes posted and
          show/update your own profile.
        </p>

        <p className="mt-2 italic font-bold">
          Nodes, GraphQL, Javascript (ES6), Apollo, Sequelize, MySQL, React,
          CSS, React context, React Hooks, AWS, EC2, Cloudfront, Route53, Google
          Analytics, NGINX, RDS
        </p>
      </div>
    </div>
  );
};
