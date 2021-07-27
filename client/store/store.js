import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from '@/store/reducers/auth.reducer';
import { playlistReducer } from '@/store/reducers/playlist.reducer';
import { trackReducer } from '@/store/reducers/track.reducer';
import { albumReducer } from '@/store/reducers/album.reducer';
import { playerReducer } from '@/store/reducers/player.reducer';
import { loadingReducer } from '@/store/reducers/loading.reducer';
import { categoryReducer } from '@/store/reducers/category.reducer';


const initialState = {};

const middleware = [thunk];

const reducer = combineReducers({
    auth: authReducer,
    track: trackReducer,
    playlist: playlistReducer,
    album: albumReducer,
    player: playerReducer,
    loading: loadingReducer,
    category: categoryReducer
});

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;