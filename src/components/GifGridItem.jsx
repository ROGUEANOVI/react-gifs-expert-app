// eslint-disable-next-line react/prop-types
export const GifGridItem = ({ title, url }) => {
	return (
		<div className='card'>
			<img srcSet={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};
