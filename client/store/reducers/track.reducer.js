import { SET_CURRENT_TRACK } from "../types/track.types";

const initialState = [];

export const trackReducer = (state = initialState, action) => {
    const { type, payload } = action;
    console.log(payload);
    switch (type) {
        case 'SET_CURRENT_TRACK':
            return payload;

        default:
            return state;
    }
}