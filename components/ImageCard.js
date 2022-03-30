import { useStore } from 'effector-react';
import { $appSettings } from '../store/AppSettings'

export default function ImageCard(props) {
  const appSettings = useStore($appSettings)

  const { title, img } = props

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'red',
      width: '25vw'
    }}>
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
        <img
          src={appSettings[img]}
          alt="something"
          style={{
            maxWidth : '20vw'
          }}
        />
      </div>
    </div>
  );
}
