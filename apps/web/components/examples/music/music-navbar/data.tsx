import { IconAlbum, IconLayoutGrid, IconMicrophone, IconMusicBolt, IconPlayerPlay, IconPlaylist, IconRadio, IconUser } from "@tabler/icons-react";
import { AppSize } from "@the-one/ui";


export const NAV_LINKS = [
  {
    title: 'Discover',
    items: [
      {
        title: 'Listen now',
        icon: <IconPlayerPlay size={AppSize["4xl"]}/>,
        active: true
      },
      {
        title: 'Browse',
        icon: <IconLayoutGrid size={AppSize["4xl"]}/>
      },
      {
        title: 'Radio',
        icon: <IconRadio size={AppSize["4xl"]}/>
      }
    ]
  },
  {
    title: 'Library',
    items: [
      {
        title: 'Playlists',
        icon: <IconPlaylist size={AppSize["4xl"]}/>
      },
      {
        title: 'Songs',
        icon: <IconMusicBolt size={AppSize["4xl"]}/>
      },
      {
        title: 'Made for you',
        icon: <IconUser size={AppSize["4xl"]}/>
      },
      {
        title: 'Artists',
        icon: <IconMicrophone size={AppSize["4xl"]}/>
      },
      {
        title: 'Albums',
        icon: <IconAlbum size={AppSize["4xl"]}/>
      }
    ]
  },
  {
    title: 'Playlists',
    items: [
      {
        title: 'Recently Added',
        icon: <IconPlaylist size={AppSize["4xl"]}/>,
      },
      {
        title: 'Recently Played',
        icon: <IconPlaylist size={AppSize["4xl"]}/>,
      },
      {
        title: 'Top Songs',
        icon: <IconPlaylist size={AppSize["4xl"]}/>,
      },
      {
        title: 'Top Albums',
        icon: <IconPlaylist size={AppSize["4xl"]}/>,
      },
      {
        title: 'Top Artists',
        icon: <IconPlaylist size={AppSize["4xl"]}/>,
      },
      {
        title: 'Logic Discography',
        icon: <IconPlaylist size={AppSize["4xl"]}/>,
      },
      {
        title: 'Bedtime Beats',
        icon: <IconPlaylist size={AppSize["4xl"]}/>,
      },
    ]
  }
]