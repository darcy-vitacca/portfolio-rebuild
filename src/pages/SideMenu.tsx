import { FC, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';

export const SideMenu: FC = (
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void
) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen max-w-md pointer-events-auto">
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
