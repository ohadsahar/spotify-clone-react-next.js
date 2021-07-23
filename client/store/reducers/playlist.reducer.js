import { GET_NEW_PLAYLISTS, GET_PLAYLIST_TRACKS, SET_CURRENT_PLAYLIST } from "@/store/types/playlist.types";

const initialState =
{
    playlists: [],
    playlistTracks: [],
    currentPlaylist: {},
}

export const playlistReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_NEW_PLAYLISTS:
            return { ...state, playlists: payload };
        case GET_PLAYLIST_TRACKS:
            return { ...state, playlistTracks: payload };
        case SET_CURRENT_PLAYLIST:
            return { ...state, currentPlaylist: payload };
        default:
            return state;
    }
}