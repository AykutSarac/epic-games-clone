import {
    SET_USER,
    TOGGLE_FRIENDLIST,
    TOGGLE_DOWNLOADS
} from '../actions/types'

const initialState = {
    displayFriendlist: true,
    displayDownloads: false,
    user: {
        username: 'AykutSrch'
    }
}

const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FRIENDLIST:
            return {
                ...state,
                displayFriendlist: typeof action.payload === 'boolean' ? action.payload : !state.displayFriendlist
            }

        case TOGGLE_DOWNLOADS:
            return {
                ...state,
                displayDownloads: typeof action.payload === 'boolean' ? action.payload : !state.displayDownloads
            }

        case SET_USER:
            return {
                ...state,
                user: action.payload
            }

        default:
            return state;
    }
}

export default layoutReducer