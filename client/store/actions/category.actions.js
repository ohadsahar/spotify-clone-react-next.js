import { SPOTIFY_CLIENT_ID } from '@/config/index';
import SpotifyWebApi from 'spotify-web-api-node';
import { setLoading } from './loading.actions';
import { GET_CATEGORIES, GET_CATEGORY } from '@/store/types/categories.types';

const spotifyApi = new SpotifyWebApi({
    clientId: SPOTIFY_CLIENT_ID
})


export const getCategories = (accessToken) => async dispatch => {
    dispatch(setLoading(true));
    spotifyApi.setAccessToken(accessToken);
    const result = await spotifyApi.getCategories({
        limit: 10,
        offset: 0,
        country: 'IL',
        locale: 'he_IL'
    });
    dispatch({ type: GET_CATEGORIES, payload: result.body.categories.items })
    setTimeout(() => {
        dispatch(setLoading(false));
    }, 1000);
}

export const getCurrentCategory = (accessToken, id) => async dispatch => {
    dispatch(setLoading(true));
    spotifyApi.setAccessToken(accessToken);
    const result = await spotifyApi.getPlaylistsForCategory(id, {
        country: 'IL',
        locale: 'he_IL'
    });
    dispatch({ type: GET_CATEGORY, payload: result.body.playlists.items })
    setTimeout(() => {
        dispatch(setLoading(false));
    }, 1000);

}