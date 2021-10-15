import * as Actions from "../actions/ActionTypes";

//initial state
const initialState = {
    route: '/'
};

//reducer
export function pathReducer (state = initialState, action) {
    switch (action.type) {
        case Actions.DIRECT_TO_MAIN:
            return { route: '/' };
        case Actions.DIRECT_TO_SETTINGS:
            return { route: '/settings' };
        default:
            return state;
    }
}

// selectors
export const getPath = (state) => state.path.route;
