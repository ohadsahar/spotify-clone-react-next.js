import { PlaylistWrapper } from './StyledPlaylist';
import { useEffect } from 'react';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setCurrentPlaylist } from '@/store/actions/playlist.actions';
;

const Playlist = ({ playlists }) => {

    const router = useRouter();
    const dispatch = useDispatch();

    const navigateTo = (playlist) => {
        dispatch(setCurrentPlaylist(playlist));
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
