import { PlaylistWrapper } from './StyledPlaylist';
import { useEffect } from 'react';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
const Playlist = ({ playlists }) => {
    console.log(playlists);
    return (
        <PlaylistWrapper>
            {playlists?.length && playlists.map((playlist) => (
                <PlaylistItem key={playlist.name} playlist={playlist} />
            ))}
        </PlaylistWrapper>
    )
}

export default Playlist
