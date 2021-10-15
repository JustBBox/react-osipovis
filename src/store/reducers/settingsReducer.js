import * as Actions from '../actions/ActionTypes'

//initial state
const initialState = {
    repo: 'School CI server',
    buildCommands: 'npm ci && npm run build',
    mainBranch: 'master',
    syncTime: 10,
    disabled: true
};

//reducer
export function settingsReducer (state = initialState, action) {
    switch (action.type) {
        case Actions.REPO_CHANGED:
            return {...state, repo: action.payload};
        case Actions.BUILD_COMMANDS_CHANGED:
            return {...state, buildCommands: action.payload};
        case Actions.MAIN_BRANCH_CHANGED:
            return {...state, mainBranch: action.payload};
        case Actions.SYNC_TIME_CHANGED:
            return {...state, syncTime: action.payload};
        default:
            return state;
    }
}

// selectors
export const getRepo = (state) => state.settings.repo;
export const getBuildCommands = (state) => state.settings.buildCommands;
export const getMainBranch = (state) => state.settings.mainBranch;
export const getSyncTime = (state) => state.settings.syncTime;
