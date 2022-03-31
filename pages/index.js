import { useEffect } from 'react';
import { getAppSettingsFx } from '../store/AppSettings'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import HeaderSimple from '../components/HeaderSimple';
import ImageCardContainer from '../components/ImageCardContainer'
import IdxSearchbar from '../components/IdxSearchbar';
import BlogCardContainer from '../components/BlogCardContainer';

export default function Home() {

	useEffect(() => {
    (async () => {
      getAppSettingsFx()
    })();
  }, [])

  return (
    <div className={styles.container}>

			<HeaderSimple
        pathKeys={{
          title            : 'settingsTitle',
          subTitle         : 'settingsSubTitle',
          backgroundImage  : 'settingsMediaPrimaryImage',
          agentVideo       : 'settingsAgentVideo'
        }}
      />

			<IdxSearchbar />

			<BlogCardContainer
				pathKeys={{
					title      : 'blogTitle',
					subTitle   : 'blogSubTitle',
					buttonText : 'blogBtnText',
					blogData   : [
						{
							title         : 'Recent Blog 1',
							previewText   : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
						},
						{
							title         : 'Recent Blog 2',
							previewText   : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
						},
						{
							title         : 'Recent Blog 3',
							previewText   : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
						},
					]
				}}
			/>

      <ImageCardContainer
        pathKeys={[
          {
            title : 'eap_01_circle_title',
            img   : 'eap_01_circle_image',
          },
          {
            title : 'eap_02_circle_title',
            img   : 'eap_02_circle_image',
          },
          {
            title : 'eap_03_circle_title',
            img   : 'eap_03_circle_image',
          },
        ]}
      />

    </div>
  )
}
