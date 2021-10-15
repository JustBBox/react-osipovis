import * as Actions from "../actions/ActionTypes";

//initial state
const initialState = {
    visible: false
};

//reducer
export function showReducer (state = initialState, action) {
    switch (action.type) {
        case Actions.SHOW_MODAL:
            return { visible: true };
        case Actions.HIDE_MODAL:
            return { visible: false };
        default:
            return state;
    }
}

// selectors
export const getShow = (state) => state.show.visible;
