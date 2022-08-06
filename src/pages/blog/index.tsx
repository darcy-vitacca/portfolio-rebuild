import Link from 'next/link';
import { compareAsc, format } from 'date-fns';
import { getDatabase } from '../../utils/notion';
import isEmpty from 'lodash/isEmpty';

export default function Blog({ posts }) {
	return (
		<div className='container max-w-2xl px-4 mx-auto my-4'>
			<Link passHref href='/'>
				<a className='text-blue-500 underline'>←Return</a>
			</Link>
			<h1 className='mt-8 text-6xl font-black '>Blog</h1>
			<ol className='mt-6'>
				<h1 className='mb-6 text-xl border-b border-gray-200'>Posts</h1>

				{!isEmpty(posts) ? (
					posts?.map((blog) => (
						<article key={blog?.id} className='mb-12'>
							<h1 className='mb-2 text-2xl font-bold'>
								{blog.properties.Name.title[0].plain_text}
							</h1>
							<p className='mb-2 text-gray-500'>
								{format(new Date(blog.last_edited_time), 'MMM dd yyyy')}
							</p>
							<Link passHref key={blog.id} href={`/blog/${blog.id}`}>
								<a className='text-blue-500 underline'>Read post→</a>
							</Link>
						</article>
					))
				) : (
					<p className='mb-2 text-gray-500'>No posts currently</p>
				)}
			</ol>
		</div>
	);
}

export const getStaticProps = async () => {
	const database = await getDatabase();
	return {
		props: {
			posts: database,
		},
		revalidate: 1,
	};
};
