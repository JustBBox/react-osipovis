import {
    REPO_CHANGED,
    BUILD_COMMANDS_CHANGED,
    MAIN_BRANCH_CHANGED,
    SYNC_TIME_CHANGED
} from "./ActionTypes";

export const updateRepo = (repo) => ({
        type: REPO_CHANGED,
        payload: repo
})
export const updateBuildCommands = (buildCommands) => ({
        type: BUILD_COMMANDS_CHANGED,
        payload: buildCommands
})
export const updateMainBranch = (mainBranch) => ({
        type: MAIN_BRANCH_CHANGED,
        payload: mainBranch
});
export const updateSyncTime = (syncTime) => ({
        type: SYNC_TIME_CHANGED,
        payload: syncTime
});
