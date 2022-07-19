import { useState } from "react";
import { Menu } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Head from "next/head";
import { SideMenu } from "../components/SideMenu";
import { AboutTextScroller } from "../components/Scroller";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-screen h-screen ">
      <Head>
        <title>Darcy Vitacca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col h-24 mx-auto md:justify-end md:flex-row bg-main-600 max-w-screen lg:text-left">
        <div className="flex items-end justify-start w-full border-r border-white"></div>
        <div className="min-w-[250px] flex justify-center items-center">
          {" "}
          <MenuIcon
            className="w-12 h-12 text-gray-100 cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
      <div>
        <div className="flex flex-row w-full border-t border-white bg-main-600 h-96 lg:text-left">
          <div className="flex flex-col w-full border-r border-white">
            <h1 className="mb-6 text-gray-100 text-7xl md:text-9xl">
              Darcy Vitacca.
            </h1>
            <AboutTextScroller />
          </div>
          <div className="w-[250px] "></div>
        </div>
        <div className="flex justify-between mx-auto bg-white border-b border-black h-96 max-w-screen lg:text-left">
          <div className="flex items-end justify-start w-full border-r border-black"></div>
          <div className="min-w-[250px] "></div>
        </div>
        <div className="flex justify-between mx-auto bg-white border-b border-black h-96 max-w-screen lg:text-left">
          <div className="flex items-end justify-start w-full border-r border-black"></div>
          <div className="min-w-[250px] bg-gray-100"></div>
        </div>
      </div>
      <div className="flex justify-between mx-auto bg-white border-b border-black h-96 max-w-screen lg:text-left">
        <div className="flex items-end justify-start w-full border-r border-black"></div>
        <div className="min-w-[250px] "></div>
      </div>
      <div className="flex justify-between mx-auto bg-white border-b border-black h-96 max-w-screen lg:text-left">
        <div className="flex items-end justify-start w-full border-r border-black"></div>
        <div className="min-w-[250px] "></div>
      </div>

      <SideMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Home;
