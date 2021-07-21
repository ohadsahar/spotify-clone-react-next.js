import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import SpotifyPlayer from "react-spotify-web-playback";
const Player = () => {

    const accessToken = useSelector(state => state.auth.accessToken);
    const track = useSelector(state => state.track.currentTrack);
    const [play, setPlay] = useState(false);
    useEffect(() => {
        setPlay(true);
    }, [track])

    if (!accessToken) return null;
    return (
        <SpotifyPlayer
            token={accessToken}
            showSaveIcon
            play={play}
            callback={state => {
                if (!state.isPlaying) {
                    // handle after song is finish play the next after him
                    setPlay(false);
                }
            }}
            uris={track?.uri ? [track?.uri] : []}
        />
    )
}

export default Player
