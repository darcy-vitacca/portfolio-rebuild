import Image from "next/future/image";
import { AboutTextScroller } from "./Scroller";
import recipelab from "../../public/assets/recipelab.svg";

export const Projects = () => {
  return (
    <div
      className="flex flex-col justify-between mx-auto bg-white border-b border-black max-w-screen lg:text-left lg:flex-row"
      id="projects"
    >
      <div className="flex flex-col items-end justify-start w-full min-w-0 border-r border-black">
        <AboutTextScroller />
        <div className="flex flex-col items-center justify-center w-full p-4 xl:flex-row">
          <div className="flex flex-col md:flex-row">
            <Image
              src={recipelab}
              alt="Recipe Lab"
              className=" m-3 cursor-pointer md:mr-3 max-w-[550px] w-full"
            />
            <div className="w-full p-4 max-w-[550px]">
              <p>
                RecipeLab is a recipe sharing platform that allows anyone to
                share and store their/others recipes online. Recipes are posted
                daily and can be upvoted and commented and saved to your recipe
                book, so you never lose a recipe again. You can also search
                through all recipes posted and show/update your own profile.
              </p>

              <p className="mt-2 italic font-bold">
                Nodes, GraphQL, Javascript (ES6), Apollo, Sequelize, MySQL,
                React, CSS, React context, React Hooks, AWS, EC2, Cloudfront,
                Route53, Google Analytics, NGINX, RDS
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <Image
              src={recipelab}
              alt="Recipe Lab"
              className=" m-3 cursor-pointer md:mr-3 max-w-[550px] w-full"
            />
            <div className="w-full p-4 max-w-[550px]">
              <p>
                RecipeLab is a recipe sharing platform that allows anyone to
                share and store their/others recipes online. Recipes are posted
                daily and can be upvoted and commented and saved to your recipe
                book, so you never lose a recipe again. You can also search
                through all recipes posted and show/update your own profile.
              </p>

              <p className="mt-2 italic font-bold">
                Nodes, GraphQL, Javascript (ES6), Apollo, Sequelize, MySQL,
                React, CSS, React context, React Hooks, AWS, EC2, Cloudfront,
                Route53, Google Analytics, NGINX, RDS
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full lg:max-w-[250px] p-4 "> */}
      {/* <p>
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
        </p> */}
      {/* </div> */}
    </div>
  );
};
