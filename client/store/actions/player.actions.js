import { SET_CURRENT_TRACK, SET_PLAYER_CURRENT_STATUS } from "@/store/types/player.types";

export const setCurrentTrack = (track) => dispatch => {
    dispatch({ type: SET_CURRENT_TRACK, payload: track });
    setCurrentPlayerStatus(true);
}

export const setCurrentPlayerStatus = (value) => dispatch => {
    dispatch({ type: SET_PLAYER_CURRENT_STATUS, payload: value });
}

