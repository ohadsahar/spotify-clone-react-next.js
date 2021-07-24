import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import SpotifyPlayer from "react-spotify-web-playback";
import { useDispatch } from 'react-redux';
import { setCurrentPlayerStatus, setCurrentTrack } from '@/store/actions/player.actions';

const Player = () => {

    const accessToken = useSelector(state => state.auth.accessToken);
    const track = useSelector(state => state.player.currentTrack);
    const isPlaying = useSelector(state => state.player.play);
    const currentAlbum = useSelector(state => state.album.currentAlbum);
    const dispatch = useDispatch();

    useEffect(() => {
    }, [track])

    const handleNextSong = () => {
        const tracks = currentAlbum.tracks.items;
        const index = tracks.findIndex((currentTrack) => currentTrack?.uri === track?.uri);
        if (index + 1 <= currentAlbum.tracks.items.length) {
            dispatch(setCurrentTrack(currentAlbum.tracks.items[index + 1]));
        }
    }

    if (!accessToken) return null;
    return (
        <SpotifyPlayer
            token={accessToken}
            showSaveIcon
            play={isPlaying}
            callback={state => {
                if (state.isPlaying) {
                    dispatch(setCurrentPlayerStatus(true));
                }
                if (!state.isPlaying) {
                    dispatch(setCurrentPlayerStatus(false));
                }
                if (!currentAlbum) return;
                if (state.progressMs === 0 && !state.isPlaying) {
                    handleNextSong();
                }

            }}
            uris={track?.uri ? [track?.uri] : []}
        />
    )
}

export default Player
