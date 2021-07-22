import { PlaylistWrapper } from './StyledPlaylist';
import { useEffect } from 'react';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import { useRouter } from 'next/router';

const Playlist = ({ playlists }) => {

    const router = useRouter();

    const navigateTo = (playlist) => {
        console.log(playlist);
        router.push({
            pathname: '/playlist',
            query: { playlistID: playlist.uri },
        })
    };

    return (
        <PlaylistWrapper>
            {playlists?.length && playlists.map((playlist) => (
                <PlaylistItem
                    key={playlist.name}
                    navigateTo={navigateTo}
                    playlist={playlist} />
            ))}
        </PlaylistWrapper>
    )
}

export default Playlist
