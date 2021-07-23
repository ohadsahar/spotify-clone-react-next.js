import { GET_SEARCHED_RESULT } from "@/store/types/track.types";

const initialState =
{
    searchedTracks: [],
    artistInfo: {},
}

export const trackReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_SEARCHED_RESULT:
            return { ...state, searchedTracks: payload.searchedTracks, artistInfo: payload.artistInfo };
        default:
            return state;
    }
}