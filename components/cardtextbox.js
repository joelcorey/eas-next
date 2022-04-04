import { useStore } from 'effector-react';
import { $appSettings } from '../store/AppSettings'

export default function CardTextBox({ text, button }) {
  const appSettings = useStore($appSettings)

  return (
    <div
			className='
				flex
				flex-col
				justify-center
				w-full
				h-64
				p-8
			'
		>
      <div className='
				flex flex-row justify-center mb-2 text-lg
			'>
        {appSettings[text]}
      </div>
      <div className='
				flex flex-row justify-center
			'>

				{
					appSettings[button] &&
					<button className='
						self-end
						bg-blue-500
						text-white
						px-32
						py-3
						rounded-sm
						text-1xl
						font-medium
						hover:bg-blue-700
						transition duration-300
					'>
						{appSettings[button]}
					</button>
				}

      </div>
    </div>
  );
}
