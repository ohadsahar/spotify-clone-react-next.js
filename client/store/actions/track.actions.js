import { GET_CURRENT_ALBUM, GET_NEW_PLAYLISTS, GET_NEW_RELEASES, GET_PLAYLIST_TRACKS, GET_SEARCHED_RESULT, SET_CURRENT_TRACK } from "../types/track.types"
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

export const getNewPlaylists = (accessToken) => async dispatch => {
    spotifyApi.setAccessToken(accessToken);
    const result = await spotifyApi.getFeaturedPlaylists({ limit: 4, offset: 1, country: 'IL', locale: 'he_IL' });
    dispatch({ type: GET_NEW_PLAYLISTS, payload: result.body.playlists.items })
    console.log(result);

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
    dispatch({ type: GET_SEARCHED_RESULT, payload: { searchedTracks: result, artistInfo: artistInfo } });
}

export const getPlaylistTracks = (accessToken, playlistID) => async dispatch => {
    spotifyApi.setAccessToken(accessToken);
    const result = await spotifyApi.getPlaylist(playlistID);
    dispatch({ type: GET_PLAYLIST_TRACKS, payload: result.body.tracks.items });
}