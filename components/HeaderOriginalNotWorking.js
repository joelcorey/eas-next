import { useEffect, useRef } from 'react';
import { useStore } from 'effector-react';
import { $appSettings } from '../store/AppSettings'

export default function Header(props) {
	const appSettings = useStore($appSettings)

	const { pathKeys } = props
	let background = useRef('')

	useEffect(() => {
		console.log(pathKeys)
		if(appSettings[pathKeys.backgroundImage] !== undefined) {
			console.log(appSettings[pathKeys.backgroundImage])
			let div = background.current
			let urlPath = 'bg-[url("' + appSettings[pathKeys.backgroundImage] + '")]'
			// div.className = div.className + urlPath
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [appSettings])

  return (
		<div
			className={`
				flex
				flex-col
				mx-auto
				text-center
				w-full
				h-96
				flex-none
				text-white
				bg-[url("https://files.easyagentpro.com/dev/images/default.jpg")]
		`}
			ref={background}
		>

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
