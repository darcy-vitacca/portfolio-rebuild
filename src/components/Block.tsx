import Text from './Text';

const Block = ({ block }) => {
	const { type } = block;
	const value = block[type];
	if (type === 'paragraph') {
		return (
			<p className='mb-4'>
				<Text text={value.text} />
			</p>
		);
	}
	if (type === 'heading_1') {
		return (
			<h1 className='mb-4 text-2xl font-bold md:text-4xl'>
				<Text text={value.text} />
			</h1>
		);
	}
	if (type === 'heading_2') {
		return (
			<h2 className='mb-4 text-xl font-bold md:text-2xl'>
				<Text text={value.text} />
			</h2>
		);
	}
	if (type === 'heading_3') {
		return (
			<h3 className='mb-4 text-lg font-bold md:text-xl'>
				<Text text={value.text} />
			</h3>
		);
	}
	if (type === 'bulleted_list_item' || type === 'numbered_list_item') {
		return (
			<li className='mb-4'>
				<Text text={value.text} />
			</li>
		);
	}
	return <p></p>;
};

export default Block;
