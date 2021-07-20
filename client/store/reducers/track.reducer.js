import { SET_CURRENT_TRACK } from "../types/track.types";

const initialState = [
    { currentTrack: '', albums: [] }
];

export const trackReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        case 'SET_CURRENT_TRACK':
            console.log(payload);
            return { albums: [], currentTrack: payload };
        case 'GET_NEW_RELEASES':
            console.log(payload);
            return { albums: payload, currentTrack: '' }
        default:
            return state;
    }
}