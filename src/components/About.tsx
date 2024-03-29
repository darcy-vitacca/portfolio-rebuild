import headshot from '../../public/assets/headshot.svg';
import githubWhite from '../../public/assets/githubwhite.svg';
import linkedin from '../../public/assets/linkedin-white.svg';
import Image from 'next/future/image';
import Link from 'next/link';

//
export const About = () => (
	<div
		className='relative flex flex-col w-full border-t border-white md:flex-row bg-main-600 h-96 lg:text-left '
		id='about'
	>
		<div className='flex flex-col justify-center w-full min-w-0 border-white md:border-r '>
			<h1 className='px-2 pt-2 mb-6 text-5xl text-gray-100 xl:text-8xl w-[90%] md:pt-0'>
				Full Stack Web Developer
			</h1>
			<h1 className='px-2  mb-6 text-xl lg:text-2xl text-black max-w-[300px] lg:max-w-full tracking-tighter'>
				Based in Melbourne (Naarm) / Lisbon.
			</h1>
			<div className='flex flex-row ml-1'>
				<Link href='https://github.com/darcy-vitacca/' passHref={true}>
					<a>
						<Image
							src={githubWhite}
							alt='Github'
							className='w-8 h-8 mr-3 cursor-pointer '
						/>
					</a>
				</Link>
				<Link href='https://www.linkedin.com/in/darcy-vitacca/' passHref={true}>
					<a>
						<Image
							src={linkedin}
							alt='Linkedin'
							className='w-8 h-8 mr-3 cursor-pointer '
						/>
					</a>
				</Link>
			</div>
			<Link href='https://www.linkedin.com/in/darcy-vitacca/' passHref={true}>
				<a>
					<Image
						src={headshot}
						alt='Headshot'
						className='min-w-[240px] w-1/2 rounded-full max-w-[400px] z-1 absolute md:top-24 md:right-12 -bottom-24 right-6 cursor-pointer'
					/>
				</a>
			</Link>
		</div>
		<div className='min-w-[250px]'></div>
	</div>
);
