import { setCurrentPlayerStatus, setCurrentTrack } from '@/store/actions/player.actions';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import SpotifyPlayer from "react-spotify-web-playback";

const Player = () => {

    const accessToken = useSelector(state => state.auth.accessToken);
    const track = useSelector(state => state.player.currentTrack);
    const isPlaying = useSelector(state => state.player.play);
    const playlistTracks = useSelector(state => state.playlist.playlistTracks);
    const currentAlbum = useSelector(state => state.album.currentAlbum);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleNextSong = () => {

        if (router.pathname === '/playlist' && playlistTracks) {
            const tracks = playlistTracks.map(({ track }) => {
                return {
                    name: track.name,
                    uri: track.uri
                }
            });
            const index = tracks.findIndex((currentTrack) => currentTrack.name === track.name);
            if (index + 1 <= tracks.length) {
                dispatch(setCurrentTrack(playlistTracks[index + 1]?.track));
            }
        }

        else if (router.pathname === '/album-page') {
            const tracks = currentAlbum.tracks.items;
            const index = tracks.findIndex((currentTrack) => currentTrack?.uri === track?.uri);
            if (index + 1 <= currentAlbum.tracks.items.length) {
                dispatch(setCurrentTrack(currentAlbum.tracks.items[index + 1]));
            }
        }
    }

    if (!accessToken) return null;
    return (
        <SpotifyPlayer
            token={accessToken}
            showSaveIcon
            play={isPlaying}
            magnifySliderOnHover{...true}
            callback={state => {
                if (!isPlaying) {
                    dispatch(setCurrentPlayerStatus(false));
                }
                if (isPlaying) {
                    dispatch(setCurrentPlayerStatus(true));
                }
                if (state.progressMs === 0 && !state.isPlaying) {
                    handleNextSong();
                }
            }}
            uris={track?.uri ? [track?.uri] : []}
        />
    )
}

export default Player;
