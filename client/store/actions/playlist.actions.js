import { GET_NEW_PLAYLISTS, GET_PLAYLIST_TRACKS, SET_CURRENT_PLAYLIST } from "@/store/types/playlist.types";

import SpotifyWebApi from 'spotify-web-api-node';
import { SPOTIFY_CLIENT_ID } from '@/config/index';

const spotifyApi = new SpotifyWebApi({
    clientId: SPOTIFY_CLIENT_ID
})
export const getNewPlaylists = (accessToken) => async dispatch => {
    spotifyApi.setAccessToken(accessToken);
    const result = await spotifyApi.getFeaturedPlaylists({ limit: 4, offset: 1, country: 'IL', locale: 'he_IL' });
    dispatch({ type: GET_NEW_PLAYLISTS, payload: result.body.playlists.items })
}

export const getPlaylistTracks = (accessToken, playlistID) => async dispatch => {
    spotifyApi.setAccessToken(accessToken);
    const result = await spotifyApi.getPlaylist(playlistID);
    dispatch({ type: GET_PLAYLIST_TRACKS, payload: result.body.tracks.items });
}

export const setCurrentPlaylist = (playlist) => dispatch => {
    dispatch({ type: SET_CURRENT_PLAYLIST, payload: playlist });
}