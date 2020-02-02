export const getSeriesData = (seriesId) => (dispatch) => {
    dispatch({
        type: 'STATE_INIT',
        currentSeriesId: seriesId
    });

    fetch("http://localhost:9001/series-videos?seriesId=" + seriesId)
    .then(response => response.json())
    .then((data) => {
        dispatch({
            type: 'STATE_SUCCESS',
            data: data
        });
    }).catch((err) => {
        dispatch({
            type: 'STATE_ERROR'
        });
    });
};