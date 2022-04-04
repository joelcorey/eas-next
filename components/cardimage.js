import { useStore } from 'effector-react';
import { $appSettings } from '../store/AppSettings'
import Image from 'next/image';

export default function CardImage({ title, img }) {
  const appSettings = useStore($appSettings)

  return (
    <div
			className='
				flex
				flex-col
				justify-center
				align-center
				w-full
				p-8
			'
		>
      <div className='
				flex flex-row justify-center my-2 text-lg
			'>
        {appSettings[title]}
      </div>
      <div className='
				flex flex-row justify-center
			'>
				{
					appSettings[img] &&
					<div
						className={`
							relative
							w-48
							h-48
						`}
					>
						<Image
							src={`${appSettings[img]}`}
							alt='something'
							layout='fill'
							placeholder='empty'
						/>
					</div>
				}

      </div>
    </div>
  );
}
