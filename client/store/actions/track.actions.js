import { SET_CURRENT_TRACK } from "../types/track.types"

export const setCurrentTrack = (track) => dispatch => {
    console.log(track);
    dispatch({ type: SET_CURRENT_TRACK, payload: track });
}