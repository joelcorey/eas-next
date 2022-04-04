import CardImage from './cardimage';
import CardTextBox from './cardtextbox';

export default function CardContainer({ pathKeys}) {

  return (
	<div className='
		flex flex-col
		items-center
		md:flex-row
		md:justify-evenly
		h-full
	'>
		{pathKeys.map((pathKey, index) => {
			return (
				<div key={index} className='

				'>
					<CardImage
						title={pathKey.title}
						img={pathKey.img}
					/>
					<CardTextBox
						text={pathKey.text}
						button={pathKey.button}
					/>
				</div>
			)
		})}
	</div>
  );
}
