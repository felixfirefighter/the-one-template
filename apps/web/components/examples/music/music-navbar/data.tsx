import { IconAlbum, IconLayoutGrid, IconMicrophone, IconMusicBolt, IconPlayerPlay, IconPlaylist, IconRadio, IconUser } from "@tabler/icons-react";
import { MAppSize } from "@the-one/mantine-ui";


export const NAV_LINKS = [
  {
    title: 'Discover',
    items: [
      {
        title: 'Listen now',
        icon: <IconPlayerPlay size={MAppSize["4xl"]}/>,
        active: true
      },
      {
        title: 'Browse',
        icon: <IconLayoutGrid size={MAppSize["4xl"]}/>
      },
      {
        title: 'Radio',
        icon: <IconRadio size={MAppSize["4xl"]}/>
      }
    ]
  },
  {
    title: 'Library',
    items: [
      {
        title: 'Playlists',
        icon: <IconPlaylist size={MAppSize["4xl"]}/>
      },
      {
        title: 'Songs',
        icon: <IconMusicBolt size={MAppSize["4xl"]}/>
      },
      {
        title: 'Made for you',
        icon: <IconUser size={MAppSize["4xl"]}/>
      },
      {
        title: 'Artists',
        icon: <IconMicrophone size={MAppSize["4xl"]}/>
      },
      {
        title: 'Albums',
        icon: <IconAlbum size={MAppSize["4xl"]}/>
      }
    ]
  },
  {
    title: 'Playlists',
    items: [
      {
        title: 'Recently Added',
        icon: <IconPlaylist size={MAppSize["4xl"]}/>,
      },
      {
        title: 'Recently Played',
        icon: <IconPlaylist size={MAppSize["4xl"]}/>,
      },
      {
        title: 'Top Songs',
        icon: <IconPlaylist size={MAppSize["4xl"]}/>,
      },
      {
        title: 'Top Albums',
        icon: <IconPlaylist size={MAppSize["4xl"]}/>,
      },
      {
        title: 'Top Artists',
        icon: <IconPlaylist size={MAppSize["4xl"]}/>,
      },
      {
        title: 'Logic Discography',
        icon: <IconPlaylist size={MAppSize["4xl"]}/>,
      },
      {
        title: 'Bedtime Beats',
        icon: <IconPlaylist size={MAppSize["4xl"]}/>,
      },
    ]
  }
]