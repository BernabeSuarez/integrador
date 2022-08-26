import { SET_CURRENT_USER } from './user-actions'
const INITIAL_STATE = {
    currentUser: null,
}
const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.yype) {

        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }

        default: return state
    }
}
export default UserReducer