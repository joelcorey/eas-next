import ImageCard from './imagecard';

export default function ImageCardContainer({ pathKeys}) {

  return (
	<div className='
		flex flex-col
		items-center
		md:flex-row
		md:justify-evenly
	'>
		{pathKeys.map((pathKey, index) => {
			return (
				<ImageCard
					key={index}
					title={pathKey.title}
					img={pathKey.img}
				/>
			)
		})}
	</div>
  );
}
