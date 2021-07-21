import { GET_CURRENT_ALBUM, GET_NEW_RELEASES, GET_SEARCHED_RESULT, SET_CURRENT_TRACK } from "../types/track.types"
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

export const getCurrentAlbum = (id, accessToken) => async dispatch => {
    spotifyApi.setAccessToken(accessToken);
    const result = await spotifyApi.getAlbum(id);
    dispatch({ type: SET_CURRENT_TRACK, payload: result.body.tracks.items[0] });
    dispatch({ type: GET_CURRENT_ALBUM, payload: result.body });
}

export const getSearchedResults = (accessToken, searchValue) => async dispatch => {
    spotifyApi.setAccessToken(accessToken);
    const result = await spotifyApi.searchTracks(searchValue);
    const artistID = result.body.tracks.items[0]?.artists[0].id;
    const artistInfo = await spotifyApi.getArtist(artistID);
    console.log({ searchedTracks: result, artistInfo: artistInfo });
    dispatch({ type: GET_SEARCHED_RESULT, payload: { searchedTracks: result, artistInfo: artistInfo } });
}