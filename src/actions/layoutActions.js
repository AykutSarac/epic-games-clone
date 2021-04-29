import {
    SET_USER,
    TOGGLE_FRIENDLIST,
    TOGGLE_DOWNLOADS,
    SET_FRIEND
} from './types'

export const toggleFriendlist = (value) => (dispatch) => {
    const payload = typeof value === 'boolean' ? value : null;
    dispatch({
        type: TOGGLE_FRIENDLIST,
        payload
    });
}

export const toggleDownloads = (value) => (dispatch) => {
    const payload = typeof value === 'boolean' ? value : null
    dispatch({
        type: TOGGLE_DOWNLOADS,
        payload
    });
}

export const setUser = (data) => (dispatch) => {
    dispatch({
        type: SET_USER,
        payload: data
    });
}

export const setFriends = (data) => (dispatch) => {
    
    dispatch({
        type: SET_FRIEND,
        payload: data
    });
}