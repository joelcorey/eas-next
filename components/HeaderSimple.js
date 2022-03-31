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
			<div className='
				absolute
				text-4xl
				mx-auto
				z-10
				right-4
				bottom-2

			'>
				{
					appSettings[pathKeys.agentVideo] &&
					<iframe
						width="315px"
						height="177px"
						src="https://www.youtube.com/embed/eTFHsRQ-DKM"
						title="YouTube video player"
						// eslint-disable-next-line react/no-unknown-property
						frameborder="0"
						allow="
							accelerometer;
							autoplay;
							clipboard-write;
							encrypted-media;
							gyroscope;
							picture-in-picture"
						// eslint-disable-next-line react/no-unknown-property
						allowfullscreen
					/>
				}


			</div>
			<div className='
				absolute
				text-3xl
				z-10
				left-1/2
				transform -translate-x-1/2
			'>
				<div className='
					flex
					flex-col
				'>
					<div>{appSettings[pathKeys.title]}</div>
					<div>{appSettings[pathKeys.subTitle]}</div>
				</div>

			</div>

			{
				appSettings[pathKeys.backgroundImage] &&
				<div
					className={`
						absolute
						w-full
						h-full
						overflow-hidden
						z-0
					`}
					style={{
						backgroundImage    : `url(${appSettings[pathKeys.backgroundImage]})`,
						backgroundPosition : 'center center',
						backgroudSize      : 'cover'
					}}
				/>
			}
		</div>
  );
}
