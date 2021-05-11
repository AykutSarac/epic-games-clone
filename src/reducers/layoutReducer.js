import {
    SET_USER,
    TOGGLE_FRIENDLIST,
    TOGGLE_DOWNLOADS,
    SET_FRIEND
} from '../actions/types'

import newsData from '../assets/News/newsData.json';

const initialState = {
    displayFriendlist: false,
    displayDownloads: false,
    user: {
        username: 'AykutSrch',
        status: 'online',
        color: 'darkviolet'
    },
    friends: [
        { username: 'Shimekato', status: 'online', color: 'orange', _id: '1' },
        { username: 'fulldoly1', status: 'offline', color: 'olive', _id: '2' },
        { username: 'KDM_Bifors', status: 'offline', color: 'darkviolet', _id: '3' },
        { username: 'Fnatic_Flayra', status: 'offline', color: 'darkviolet', _id: '4' },
        { username: 'LapuLapu53', status: 'offline', color: 'olive', _id: '5' },
        { username: 'RealBillGates', status: 'offline', color: 'darkviolet', _id: '6' },
        { username: 'FortniteKid007', status: 'online', color: 'olive', _id: '7' },
        { username: 'Purces', status: 'offline', color: 'darkviolet', _id: '8' }
    ],
    newsData: newsData
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

        case SET_FRIEND:
            return {
                ...state,
                friends: [...state.friends, action.payload]
            }

        default:
            return state;
    }
}

export default layoutReducer