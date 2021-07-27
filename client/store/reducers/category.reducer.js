import { GET_CATEGORIES, GET_CATEGORY } from "@/store/types/categories.types";

const initialState = {
    categories: [],
    categoryPlaylists: []
}

export const categoryReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_CATEGORIES:
            return { ...state, categories: payload };
        case GET_CATEGORY:
            return { ...state, categoryPlaylists: payload };
        default:
            return state;
    }
}