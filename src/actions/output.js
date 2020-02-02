import { STATE_INIT, STATE_SUCCESS, STATE_ERROR } from './states';

export default function (state = {}, action) {
    switch (action.type) {
        case STATE_INIT:
            return {
                ...state,
                currentSeriesId: action.currentSeriesId,
                loading: true,
                error: false,
            };
        case STATE_SUCCESS:
            return {
                loading: false,
                error: false,
                loadComponent: true,
                imageURL: action.data.seriesHeroArt,
                seriesTitle: action.data.title,
                episodeList: action.data.episodeList
            };
        case STATE_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
}