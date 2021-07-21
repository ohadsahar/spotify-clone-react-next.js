import { SET_CURRENT_TRACK } from "../types/track.types";

const initialState =
    { currentTrack: '', currentAlbum: null, albums: [], searchedTracks: [], artistInfo: {} }


export const trackReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_CURRENT_TRACK':
            return { ...state, currentTrack: payload };
        case 'GET_NEW_RELEASES':
            return { ...state, albums: payload, currentTrack: '' }
        case 'GET_CURRENT_ALBUM':
            return { ...state, currentAlbum: payload }
        case 'GET_SEARCHED_RESULT':
            return { ...state, searchedTracks: payload.searchedTracks, artistInfo: payload.artistInfo }
        default:
            return state;
    }
}