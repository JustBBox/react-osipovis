import React from "react";

const AppContext = React.createContext({
    path: '/',
    repo: 'School CI server',
    buildCommands: '',
    mainBranch: '',
    syncTime: 10,
    setPath: (value) => {
        this.path = value || window.location.pathname
        return value;
    }
});

export default AppContext;
