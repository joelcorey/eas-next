import { useStore } from 'effector-react';
import { $appSettings } from '../store/AppSettings'
import BlogCard from './blogcard';

export default function BlogCardContainer({ pathKeys }) {
	const appSettings = useStore($appSettings)

	const { title, subTitle, buttonText, blogData } = pathKeys

  return (
	<div className='
		flex flex-col justify-evenly
		mb-20
		h-auto
		w-full
	'>
		<div className='
			flex flex-row justify-center mb-2
			mb-4
			text-xl
		'
		>
			{appSettings[title]}
		</div>
		<div className='
			flex flex-col
			items-center
			md:flex-row
			md:justify-evenly
		'>
			{blogData.map(({ title, previewText }, index) => {
				return (
					<BlogCard
						key={index}
						title={title}
						previewText={previewText}
					/>
				)
			})}
		</div>
		<div className='
			flex flex-col
			mb-4
			text-xl
		'>
			<button>{appSettings[buttonText]}</button>
		</div>
	</div>
  );
}
