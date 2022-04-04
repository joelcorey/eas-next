import ImageCard from './imagecard';

export default function ImageCardContainer(props) {
	const { pathKeys } = props

  return (
	<div className='
		flex
		shrink-0
		sm:flex-col
		md:flex-row
		justify-evenly
		mx-auto
		h-1/3
		flex-none
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
