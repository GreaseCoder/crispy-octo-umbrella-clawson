import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import dataOutput from './output';

const middleware = [thunk];
const initialState = {
    loading: false,
    error: false,
    imageURL: '',
    seriesTitle: '',
    episodeList: null,
};

const store = createStore(
    dataOutput,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware),
    ),
);

export default store;