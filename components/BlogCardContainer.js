import { useStore } from 'effector-react';
import { $appSettings } from '../store/AppSettings'
import BlogCard from './BlogCard';

export default function BlogCardContainer(props) {
	const appSettings = useStore($appSettings)

	const { pathKeys } = props
	const { title, subTitle, buttonText, blogData } = pathKeys

  return (
	<div className='
		flex
		shrink-0
		flex-col
		justify-evenly
		mx-auto
		my-10
		h-32
		flex-none
	'>
		<div>{appSettings[title]}</div>
		<div className='
			flex
			flex-row
			justify-evenly

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
	</div>
  );
}
