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
				justify-around
				w-full
				bg-gray
				text-white
				p-8
				m-2
			'>
      <div className='
				flex flex-row justify-center mb-2
			'>
        {title}
      </div>
      <div className='
				flex flex-row justify-center mb-2
			'>
				{previewText}

      </div>
    </div>
  );
}
