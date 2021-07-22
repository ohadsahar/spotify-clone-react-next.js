const initialState =
{
    currentTrack: [],
    playlists: [],
    albums: [],
    searchedTracks: [],
    playlistTracks: [],
    artistInfo: {},
    currentAlbum: null,
}

export const trackReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_CURRENT_TRACK':
            return { ...state, currentTrack: payload };
        case 'GET_NEW_RELEASES':
            return { ...state, albums: payload, currentTrack: '' }
        case 'GET_CURRENT_ALBUM':
            return { ...state, currentAlbum: payload }
        case 'GET_SEARCHED_RESULT':
            return { ...state, searchedTracks: payload.searchedTracks, artistInfo: payload.artistInfo };
        case 'GET_NEW_PLAYLISTS':
            return { ...state, playlists: payload };
        case 'GET_PLAYLIST_TRACKS':
            return { ...state, playlistTracks: payload };
        default:
            return state;
    }
}