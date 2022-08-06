import Link from 'next/link';
import React from 'react';
import Block from '../../components/Block';
import { getBlocks, getDatabase, getPage } from '../../utils/notion';

const BlogPage = ({ blocks, page }) => {
	const title = page.properties.Name.title[0].plain_text;
	return (
		<div className='container max-w-2xl px-4 mx-auto my-4'>
			<Link passHref href='/blog/'>
				<a className='text-blue-500 underline'>←Return</a>
			</Link>
			<title>{title}</title>
			<main className='mx-4 my-4 md:container md:mx-auto'>
				<h1 className='my-4 text-2xl font-bold md:text-4xl'>{title}</h1>
				{blocks.map((block) => (
					<Block key={block.id} block={block} />
				))}
				<Link passHref href='/blog'>
					<a className='inline-block px-4 py-2 text-white bg-green-500'>
						Back to overview
					</a>
				</Link>
			</main>
		</div>
	);
};

export async function getStaticPaths() {
	const blogs = await getDatabase();
	return {
		paths: blogs.map((el) => ({
			params: {
				id: el.id,
			},
		})),
		fallback: 'blocking',
	};
}

export async function getStaticProps(context) {
	const { id } = context.params;
	const blocks = await getBlocks(id);
	const page = await getPage(id);
	return {
		props: {
			blocks,
			page,
		},
		revalidate: 3600,
	};
}

export default BlogPage;
