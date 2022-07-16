import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen h-screen bg-gray-700">
      <Head>
        <title>Darcy Vitacca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-between px-4 pt-3 mx-auto max-w-screen-section sm:px-8 lg:px-12 lg:text-left">
        <p className="text-gray-100">Darcy Vitacca</p>
        <MenuIcon
          className="w-8 h-8 text-gray-100 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div className="w-full lg:w-[500px] bg-gray-400 h-screen absolute inset-y-0 right-0">
          <div className="flex justify-end w-full pt-3">
            <XIcon
              className="w-8 h-8 text-gray-100 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <div className="flex flex-col">
            <p>Menu Item 1</p>
            <p>Menu Item 2</p>
            <p>Menu Item 3</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
