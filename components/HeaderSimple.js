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
					style={{
						backgroundImage    : `url(${appSettings[pathKeys.backgroundImage]})`,
						backgroundPosition : 'center center',
						backgroudSize      : 'cover'
					}}
				/>
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
