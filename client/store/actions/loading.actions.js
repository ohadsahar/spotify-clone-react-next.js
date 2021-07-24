import { SET_LOADING } from "@/store/types/loading.types"

export const setLoading = (value) => dispatch => {
    dispatch({ type: SET_LOADING, payload: value });
}