import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import SpotifyPlayer from "react-spotify-web-playback";
import { useDispatch } from 'react-redux';
import { setCurrentTrack } from '@/store/actions/track.actions';

const Player = () => {

    const accessToken = useSelector(state => state.auth.accessToken);
    const track = useSelector(state => state.track.currentTrack);
    const currentAlbum = useSelector(state => state.track.currentAlbum);
    const [play, setPlay] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setPlay(true);
    }, [track])

    const handleNextSong = () => {
        const tracks = currentAlbum.tracks.items;
        const index = tracks.findIndex((currentTrack) => currentTrack.uri === track.uri);
        if (index + 1 <= currentAlbum.tracks.items.length) {
            dispatch(setCurrentTrack(currentAlbum.tracks.items[index + 1]));
        }
    }

    if (!accessToken) return null;
    return (
        <SpotifyPlayer
            token={accessToken}
            showSaveIcon
            play={play}
            callback={state => {
                if (!currentAlbum) return;
                if (state.progressMs === 0 && !state.isPlaying) {
                    handleNextSong();
                }
                if (!state.isPlaying) {
                    setPlay(false);
                }
            }}
            uris={track?.uri ? [track?.uri] : []}
        />
    )
}

export default Player
