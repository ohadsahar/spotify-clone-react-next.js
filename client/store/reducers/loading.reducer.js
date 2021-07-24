import { SET_LOADING } from "@/store/types/loading.types";

const initialState = {
    loading: false
}

export const loadingReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_LOADING:
            return { ...state, loading: payload };
        default:
            return state;
    }
}