import { Fragment, useState, FC } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import { classNames } from '../utils/classNames';
import github from '../../public/assets/github.svg';
import linkedin from '../../public/assets/linkedin-black.svg';
import twtr from '../../public/assets/twtr.svg';
import Link from 'next/link';
import Image from 'next/future/image';

interface ISideMenuProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const menuItems = [
	{ href: '#about', label: 'About' },
	{ href: '#projects', label: 'Projects' },
	{ href: '#work-history', label: 'Work History' },
];

export const SideMenu: FC<ISideMenuProps> = ({ open, setOpen }) => {
	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as='div' className='relative z-10' onClose={setOpen}>
				<div className='fixed inset-0 ' />
				<div className='fixed inset-0 w-full overflow-hidden '>
					<div className='absolute inset-0 overflow-hidden'>
						<div className='fixed inset-y-0 right-0 flex max-w-full pointer-events-none '>
							<Transition.Child
								as={Fragment}
								enter='transform transition ease-in-out duration-500 sm:duration-700'
								enterFrom='translate-x-full'
								enterTo='translate-x-0'
								leave='transform transition ease-in-out duration-500 sm:duration-700'
								leaveFrom='translate-x-0'
								leaveTo='translate-x-full'
							>
								<Dialog.Panel className='w-screen max-w-lg pointer-events-auto '>
									<div className='flex flex-col h-full shadow-xl bg-stone-200'>
										<div className='px-6 py-6 mt-2'>
											<div className='flex items-end justify-end'>
												<div className='flex items-center h-7'>
													<button
														type='button'
														className='text-gray-400 bg-white rounded-md hover:text-gray-500 focus:ring-2 focus:ring-indigo-500'
														onClick={() => setOpen(false)}
													>
														<span className='sr-only'>Close panel</span>
														<XIcon className='w-12 h-12' aria-hidden='true' />
													</button>
												</div>
											</div>
										</div>
										<div>
											<div className='mx-6'>
												{menuItems?.map((item) => (
													<Link key={item.label} href={item?.href}>
														<div
															className='w-full p-2 my-3 text-3xl text-center text-white bg-black cursor-pointer hover:bg-main-500 md:text-6xl'
															onClick={() => setOpen(false)}
														>
															{item.label}
														</div>
													</Link>
												))}
											</div>
											<div className='flex justify-end mx-6 mt-12'>
												<Link
													href='https://www.linkedin.com/in/darcy-vitacca/'
													passHref={true}
												>
													<Image
														src={linkedin}
														alt='linkedin'
														className='w-8 h-8 mr-6 cursor-pointer'
													/>
												</Link>
												<Link
													href='https://github.com/darcy-vitacca/'
													passHref={true}
												>
													<Image
														src={github}
														alt='github'
														className='w-8 h-8 mr-6 cursor-pointer '
													/>
												</Link>

												<Link
													href='https://twitter.com/darcyio_'
													passHref={true}
												>
													<Image
														src={twtr}
														alt='twtr'
														className='w-8 h-8 cursor-pointer fill-blue-500'
													/>
												</Link>
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
