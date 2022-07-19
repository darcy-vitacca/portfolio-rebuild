import { Fragment, useState, FC } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { classNames } from "../utils/classNames";
import Link from "next/link";

interface ISideMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const menuItems = [
  { href: "#", label: "Menu Item" },
  { href: "#", label: "Menu Item" },
  { href: "#", label: "Menu Item" },
  { href: "#", label: "Menu Item" },
];

export const SideMenu: FC<ISideMenuProps> = ({ open, setOpen }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0 " />
        <div className="fixed inset-0 w-full overflow-hidden ">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pointer-events-none ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen max-w-lg pointer-events-auto ">
                  <div className="flex flex-col h-full shadow-xl bg-slate-100">
                    <div className="px-6 py-6">
                      <div className="flex items-end justify-end">
                        <div className="flex items-center ml-3 h-7">
                          <button
                            type="button"
                            className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="w-6 h-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mx-6 mt-6">
                        {menuItems?.map((item) => (
                          <Link key={item.label} href={item?.href}>
                            <div className="w-full p-2 my-3 text-6xl text-center text-white bg-black cursor-pointer">
                              {item.label}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
