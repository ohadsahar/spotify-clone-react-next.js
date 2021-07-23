import { GET_CURRENT_ALBUM, GET_NEW_RELEASES } from "@/store/types/album.types";

const initialState =
{
    albums: [],
    currentAlbum: null,
}

export const albumReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_NEW_RELEASES:
            return { ...state, albums: payload, currentTrack: '' }
        case GET_CURRENT_ALBUM:
            return { ...state, currentAlbum: payload }
        default:
            return state;
    }
}