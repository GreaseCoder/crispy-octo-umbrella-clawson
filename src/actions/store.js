import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataOutput from './output';

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
    applyMiddleware(thunk)
);

export default store;