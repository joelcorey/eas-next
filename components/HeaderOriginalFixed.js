import { useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { $appSettings } from '../store/AppSettings';

const Header = ({ pathKeys }) => {
	const appSettings = useStore($appSettings);
  const [bgImage, setBgImage] = useState('');

	useEffect(() => {
		if (typeof appSettings[pathKeys.backgroundImage] !== 'undefined') {
      setBgImage(appSettings[pathKeys.backgroundImage]);
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
        ${bgImage ? 'bg-[url("' + bgImage + '")]' : ''}
		  `}
		>

			<div className="text-4xl">
				{appSettings[pathKeys.title]}
			</div>
			<div className="text-3xl">
				{appSettings[pathKeys.subTitle]}
			</div>
		</div>
  );
};

export default Header;

// setting div.className via div.className = div.className + <thing> not gonna fly. If you need to modify the dom element directly (:bangbang: don’t do this :bangbang:), you’d want to do div.classList.toggle('class name string') (edited)

