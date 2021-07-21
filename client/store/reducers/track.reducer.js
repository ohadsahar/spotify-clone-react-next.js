import { SET_CURRENT_TRACK } from "../types/track.types";

const initialState =
    { currentTrack: '', currentAlbum: null, albums: [] }


export const trackReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        case 'SET_CURRENT_TRACK':
            console.log(payload);
            return { ...state, albums: [], currentTrack: payload };
        case 'GET_NEW_RELEASES':
            console.log(payload);
            return { ...state, albums: payload, currentTrack: '' }
        case 'GET_CURRENT_ALBUM':
            return { ...state, currentAlbum: payload }
        default:
            return state;
    }
}