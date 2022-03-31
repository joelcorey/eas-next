import { useStore } from 'effector-react';
import { $appSettings } from '../store/AppSettings'
import Image from 'next/image';

export default function ImageCard({ title, previewText }) {
  const appSettings = useStore($appSettings)

  return (
    <div
			className='
				flex
				flex-col
				justify-center
				w-3/12
				bg-gray
				text-white
				p-2
			'
		>
      <div style={{
        alignSelf: 'center',
        height : '4vh',
        fontSize: '18px'
      }}>
        {title}
      </div>
      <div style={{
        alignSelf: 'center',
      }}>
				{previewText}

      </div>
    </div>
  );
}
