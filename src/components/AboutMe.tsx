import ts from '../../public/assets/ts.svg';
import js from '../../public/assets/js.svg';
import react from '../../public/assets/react.svg';
import node from '../../public/assets/node.svg';
import next from '../../public/assets/next.svg';
import graphql from '../../public/assets/graphql.svg';
import mysql from '../../public/assets/mysql.svg';
import psql from '../../public/assets/psql.svg';
import html from '../../public/assets/html.svg';
import css from '../../public/assets/css.svg';
import prisma from '../../public/assets/prisma.svg';
import Image from 'next/future/image';
import { v4 as uuid } from 'uuid';

const icons = [
	react,
	ts,
	js,
	node,
	next,
	graphql,
	prisma,
	html,
	css,
	psql,
	mysql,
];

export const AboutMe = () => {
	return (
		<div className='flex flex-col mx-auto bg-white border-b border-black h-96 max-w-screen lg:text-left md:flex-row'>
			<div className='flex flex-col justify-center w-full h-full min-w-0 border-black md:border-r md:justify-center '>
				<h2 className='mx-2 mt-24 text-md sm:mt-2 md:text-2xl md:w-[80%]'>
					Hi I&rsquo;m Darcy! A self taught full stack developer, with a passion
					for creating good systems in code and life. I have a broad range of
					experience over many different technologies, specializing in web
					development.
				</h2>
				<div className='flex flex-row flex-wrap p-2 mt-2'>
					{icons.map((icon) => (
						<Image
							src={icon}
							key={uuid()}
							alt='Experience Icon Technology'
							className='w-10 h-10 pr-1 mr-1 cursor-pointer lg:w-14 lg:h-14 md:mr-3 '
						/>
					))}
				</div>
			</div>
			<div className='min-w-[250px] '></div>
		</div>
	);
};
