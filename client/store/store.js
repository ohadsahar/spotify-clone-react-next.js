import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth.reducer';
import { trackReducer } from './reducers/track.reducer';


const initialState = {};

const middleware = [thunk];

const reducer = combineReducers({
    auth: authReducer,
    track: trackReducer
});
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;