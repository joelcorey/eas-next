import { useEffect, useRef } from 'react';
import { useStore } from 'effector-react';
import { $appSettings } from '../store/AppSettings'
import Image from 'next/image';

export default function Header({ pathKeys }) {
	const appSettings = useStore($appSettings)

  return (
		<div
			className={`
				relative
				mx-auto
				text-center
				w-full
				h-96
				flex-none
				text-white

		`}
		>
			{
				appSettings[pathKeys.backgroundImage] &&
				<div
					className={`
						relative
						w-full
						h-full
						overflow-hidden
					`}
				>
					<Image
						src={`${appSettings[pathKeys.backgroundImage]}`}
						alt='something'
						placeholder='empty'
						layout='responsive'
						objectFit="cover"
						width={1000}
						height={1000}
						style={{marginTop: '-1000px'}}
					/>
				</div>
				}

			<div className='
				text-4xl
			'>
				{appSettings[pathKeys.title]}
			</div>
			<div className='
				text-3xl
			'>
				{appSettings[pathKeys.subTitle]}
			</div>
		</div>
  );
}
