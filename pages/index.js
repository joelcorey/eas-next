import { useEffect } from 'react';
import { getAppSettingsFx } from '../store/AppSettings'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import ImageCardContainer from '../components/imageCardContainer'
// import Header from '../components/Header';
import HeaderSimple from '../components/HeaderSimple';

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
