import { SPOTIFY_CLIENT_ID } from '@/config/index';
import { GET_SEARCHED_RESULT } from "@/store/types/track.types";
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
    clientId: SPOTIFY_CLIENT_ID
})

export const getSearchedResults = (accessToken, searchValue) => async dispatch => {
    spotifyApi.setAccessToken(accessToken);
    const result = await spotifyApi.searchTracks(searchValue);
    const artistID = result.body.tracks.items[0]?.artists[0].id;
    const artistInfo = await spotifyApi.getArtist(artistID);
    dispatch({ type: GET_SEARCHED_RESULT, payload: { searchedTracks: result, artistInfo: artistInfo } });
}
