import { SPOTIFY_CLIENT_ID } from '@/config/index';
import SpotifyWebApi from 'spotify-web-api-node';
import { GET_CURRENT_ALBUM, GET_NEW_RELEASES } from "@/store/types/album.types";

const spotifyApi = new SpotifyWebApi({
    clientId: SPOTIFY_CLIENT_ID
})

export const getNewReleases = (accessToken) => async dispatch => {
    spotifyApi.setAccessToken(accessToken);
    const result = await spotifyApi.getNewReleases({ limit: 6, offset: 0, country: 'IL' });
    dispatch({ type: GET_NEW_RELEASES, payload: result.body.albums.items });
}

export const getCurrentAlbum = (id, accessToken) => async dispatch => {
    spotifyApi.setAccessToken(accessToken);
    const result = await spotifyApi.getAlbum(id);
    dispatch({ type: GET_CURRENT_ALBUM, payload: result.body });
}

