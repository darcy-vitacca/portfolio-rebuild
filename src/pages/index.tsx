import { useState } from 'react';
import { Menu } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/solid';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import type { NextPage } from 'next';
import Head from 'next/head';
import { SideMenu } from './SideMenu';

function classNames(...classes: [string, string]) {
  return classes.filter(Boolean).join(' ');
}

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
      {isOpen && <SideMenu />}
    </div>
  );
};

export default Home;
