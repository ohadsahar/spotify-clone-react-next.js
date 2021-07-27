import { SPOTIFY_CLIENT_ID } from '@/config/index';
import { GET_NEW_PLAYLISTS, GET_PLAYLIST_TRACKS, SET_CURRENT_PLAYLIST } from "@/store/types/playlist.types";
import SpotifyWebApi from 'spotify-web-api-node';
import { setLoading } from "@/store/actions/loading.actions";


const spotifyApi = new SpotifyWebApi({
    clientId: SPOTIFY_CLIENT_ID
})
export const getNewPlaylists = (accessToken) => async dispatch => {
    dispatch(setLoading(true));
    spotifyApi.setAccessToken(accessToken);
    const result = await spotifyApi.getFeaturedPlaylists({ limit: 10, offset: 0, country: 'IL', locale: 'he_IL' });
    dispatch({ type: GET_NEW_PLAYLISTS, payload: result.body.playlists.items });
    setTimeout(() => {
        dispatch(setLoading(false));
    }, 1000);
}

export const getPlaylistTracks = (accessToken, playlistID) => async dispatch => {
    dispatch(setLoading(true));
    spotifyApi.setAccessToken(accessToken);
    const result = await spotifyApi.getPlaylist(playlistID);
    dispatch({ type: GET_PLAYLIST_TRACKS, payload: result.body.tracks.items });
    setTimeout(() => {
        dispatch(setLoading(false));
    }, 1000);
}

export const setCurrentPlaylist = (playlist) => dispatch => {
    dispatch({ type: SET_CURRENT_PLAYLIST, payload: playlist });
}