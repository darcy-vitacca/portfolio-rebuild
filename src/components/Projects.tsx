import Image from 'next/future/image';
import { FC } from 'react';
import { IProjectProps } from '../utils/projects';
import { AboutTextScroller } from './Scroller';
import { nanoid } from 'nanoid';
import github from '../../public/assets/githubsymbol.png';
import newtab from '../../public/assets/newtab.png';
import Link from 'next/link';

export const Projects: FC<{
	header: string;
	scrollbar?: boolean;
	id: string;
	projectData: [IProjectProps, IProjectProps?][];
}> = ({ header, scrollbar, id, projectData }) => {
	return (
		<>
			<div className='flex justify-between h-24 mx-auto border-b border-black max-w-screen lg:text-left'>
				<div className='flex items-end justify-start w-full '></div>
				{scrollbar && <div className='min-w-[250px] bg-main-600'></div>}
			</div>
			<div
				className='flex flex-col justify-between h-40 mx-auto bg-white border-b border-l border-black max-w-screen lg:text-left lg:flex-row'
				id={id}
			>
				<div
					className={`flex flex-col w-full min-w-0  ${
						!scrollbar && 'justify-center'
					}`}
				>
					{scrollbar && <AboutTextScroller />}
					<h1 className='w-full px-2 pt-2 pr-6 text-center text-black text-7xl md:text-8xl md:text-right'>
						{header}
					</h1>
					{scrollbar && <div className='min-w-[250px] bg-main-600'></div>}
				</div>
			</div>
			{projectData?.map((project: [IProjectProps, IProjectProps?]) => (
				<div
					key={nanoid()}
					className='flex flex-col items-center justify-center w-full p-4 py-6 2xl:flex-row 2xl:items-start'
				>
					<Project {...project[0]} />
					{project[1] && <Project {...project[1]} />}
				</div>
			))}
		</>
	);
};
//

export const Project: FC<IProjectProps> = ({
	img,
	text,
	tech,
	header,
	href,
	repo,
	dates,
}) => {
	return (
		<div className='flex flex-col px-3 py-5 lg:flex-row '>
			<Image
				src={img}
				alt='Recipe Lab'
				className='object-cover rounded-lg md:mr-3 w-[500px] h-[500px]'
			/>
			<div className='w-full max-w-[550px]'>
				<div className='flex flex-col justify-between mb-2'>
					<h1 className='mt-2 text-2xl font-bold md:mt-0'>{header}</h1>
					<p className='text-sm font-bold'>{dates}</p>
				</div>
				<p>{text}</p>

				<p className='mt-2 text-sm italic font-bold'>{tech}</p>
				<div className='flex flex-row w-full mt-2'>
					{href && (
						<LinkWrapper link={href}>
							<a target='_blank' rel='noopener noreferrer'>
								<Image
									src={newtab}
									alt='Website'
									className='w-6 h-6 mr-2 cursor-pointer'
								/>
							</a>
						</LinkWrapper>
					)}
					{repo && (
						<LinkWrapper link={repo}>
							<a target='_blank' rel='noopener noreferrer'>
								<Image
									src={github}
									alt='Github'
									className='w-5 h-6 cursor-pointer'
								/>
							</a>
						</LinkWrapper>
					)}
				</div>
			</div>
		</div>
	);
};

export const LinkWrapper: FC<{ link?: string; children: any }> = ({
	link,
	children,
}) => {
	return link ? (
		<Link href={link} passHref={true}>
			{children}
		</Link>
	) : (
		children
	);
};
