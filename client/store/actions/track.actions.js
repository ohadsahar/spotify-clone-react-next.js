import { GET_NEW_RELEASES, SET_CURRENT_TRACK } from "../types/track.types"
import SpotifyWebApi from 'spotify-web-api-node';
import { SPOTIFY_CLIENT_ID } from '@/config/index';

const spotifyApi = new SpotifyWebApi({
    clientId: SPOTIFY_CLIENT_ID
})

export const setCurrentTrack = (track) => dispatch => {
    dispatch({ type: SET_CURRENT_TRACK, payload: track });
}

export const getNewReleases = (accessToken) => async dispatch => {
    spotifyApi.setAccessToken(accessToken);
    const result = await spotifyApi.getNewReleases({ limit: 5, offset: 0, country: 'IL' });
    dispatch({ type: GET_NEW_RELEASES, payload: result.body.albums.items });
}