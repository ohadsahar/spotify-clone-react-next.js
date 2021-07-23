import { SET_CURRENT_TRACK, SET_PLAYER_CURRENT_STATUS } from "../types/player.types";

const initialState =
{
    currentTrack: null,
    play: false,
}

export const playerReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_CURRENT_TRACK:
            return { ...state, currentTrack: payload };
        case SET_PLAYER_CURRENT_STATUS:
            return { ...state, play: payload };
        default:
            return state;
    }
}