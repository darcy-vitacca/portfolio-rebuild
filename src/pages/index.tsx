import { useState } from "react";
import { Menu } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Head from "next/head";
import { SideMenu } from "../components/SideMenu";
import { AboutTextScroller } from "../components/Scroller";
import { About } from "../components/About";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-screen h-screen ">
      <Head>
        <title>Darcy Vitacca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row justify-end h-24 mx-auto bg-main-600 max-w-screen lg:text-left">
        <div className="flex items-end justify-start w-full border-r border-white">
          <h1 className="px-4 mb-6 text-2xl text-gray-100 ">d. vitacca</h1>
        </div>
        <div className="min-w-[90px] md:min-w-[250px] flex justify-center items-center">
          <MenuIcon
            className="w-12 h-12 text-gray-100 cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
      <div>
        <About />
        <div className="flex justify-between mx-auto bg-white border-b border-black h-96 max-w-screen lg:text-left">
          <div className="w-full min-w-0 border-r border-black">
            <p>
              I’m a self taught full stack developer, with a passion for
              creating good systems in code and life.
            </p>
          </div>
          <div className="min-w-[250px] "></div>
        </div>
        <div className="flex justify-between mx-auto bg-white border-b border-black h-96 max-w-screen lg:text-left">
          <div className="flex items-end justify-start w-full min-w-0 border-r border-black">
            <AboutTextScroller />
          </div>
          <div className="min-w-[250px] "></div>
        </div>
        <div className="flex justify-between mx-auto bg-white border-b border-black h-96 max-w-screen lg:text-left">
          <div className="flex items-end justify-start w-full border-r border-black"></div>
          <div className="min-w-[250px] bg-stone-200"></div>
        </div>
      </div>
      <div className="flex justify-between mx-auto border-b border-black h-96 max-w-screen lg:text-left">
        <div className="flex items-end justify-start w-full border-r border-black"></div>
        <div className="min-w-[250px] "></div>
      </div>
      <div className="flex justify-between mx-auto border-b border-black h-96 max-w-screen lg:text-left">
        <div className="flex items-end justify-start w-full border-r border-black bg-main-600"></div>
        <div className="min-w-[250px] "></div>
      </div>

      <SideMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Home;
