import SpotifyPlayer from "react-spotify-web-playback";
import { useEffect, useState } from 'react';

const Player = ({ accessToken, trackUri }) => {

    const [play, setPlay] = useState(false);

    useEffect(() => {
        setPlay(true);
    }, [trackUri])

    if (!accessToken) return null;
    return (
        <SpotifyPlayer
            token={accessToken}
            showSaveIcon
            play={play}
            callback={state => {
                if (!state.isPlaying) setPlay(false);
            }}
            uris={trackUri ? [trackUri] : []}
        />
    )
}

export default Player
