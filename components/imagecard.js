import { useStore } from 'effector-react';
import { $appSettings } from '../store/AppSettings'
import Image from 'next/image';

export default function ImageCard(props) {
  const appSettings = useStore($appSettings)

  const { title, img } = props

  return (
    <div
			className='
				flex
				flex-col
				justify-center
				w-3/12
			'
		>
      <div style={{
        alignSelf: 'center',
        height : '4vh',
        fontSize: '18px'
      }}>
        {appSettings[title]}
      </div>
      <div style={{
        alignSelf: 'center',
      }}>
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
