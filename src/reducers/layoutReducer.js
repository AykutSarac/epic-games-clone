import {
    SET_USER,
    TOGGLE_FRIENDLIST,
    TOGGLE_DOWNLOADS,
    SET_FRIEND
} from '../actions/types'

const initialState = {
    displayFriendlist: true,
    displayDownloads: false,
    user: {
        username: 'AykutSrch',
        status: 'online',
        color: 'darkviolet'
    },
    friends: [
        { username: 'Shimekato', status: 'online', color: 'orange' },
        { username: 'fulldoly1', status: 'offline', color: 'olive' },
        { username: 'KDM_Bifors', status: 'offline', color: 'darkviolet' },
        { username: 'Fnatic_Flayra', status: 'offline', color: 'darkviolet' },
        { username: 'LapuLapu53', status: 'offline', color: 'olive' },
        { username: 'RealBillGates', status: 'offline', color: 'darkviolet' },
        { username: 'FortniteKid007', status: 'online', color: 'olive' }
    ]
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