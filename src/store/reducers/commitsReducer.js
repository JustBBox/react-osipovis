//initial state
const initialState = {
    data: [{
        id: '#2396',
        status: 'approved',
        message: 'Upgrade deps',
        branch: 'master',
        commitHash: '952e5567',
        author: 'JustBBox',
        date: '22 sep, 2021',
        time: '1 ч 20 мин'
    },
        {
            id: '#2376',
            status: 'progress',
            message: 'Update readme',
            branch: 'master',
            commitHash: '6dd41272',
            author: 'JustBBox',
            date: '21 sep, 2021',
            time: '1 ч 20 мин'
        },
        {
            id: '#1901',
            status: 'approved',
            message: 'Change default font',
            branch: 'master',
            commitHash: '7224c264',
            author: 'JustBBox',
            date: '10 aug, 2021',
            time: '1 ч 20 мин'
        },
        {
            id: '#1836',
            status: 'failed',
            message: 'Fix overlapped text',
            branch: 'master',
            commitHash: 'c5bd8884',
            author: 'JustBBox',
            date: '1 aug, 2021',
            time: '1 ч 20 мин'
        },
        {
            id: '#1123',
            status: 'approved',
            message: 'add documentation about postresql scaler',
            branch: 'master',
            commitHash: '8da91a1d',
            author: 'JustBBox',
            date: '29 may, 2021',
            time: '1 ч 20 мин'
        },
        {
            id: '#1056',
            status: 'approved',
            message: 'Update postresql scaler version',
            branch: 'master',
            commitHash: '5a571978',
            author: 'JustBBox',
            date: '28 may, 2021',
            time: '1 ч 20 мин'
        },
        {
            id: '#890',
            status: 'approved',
            message: 'Increase retry timeout after failed attempts',
            branch: 'master',
            commitHash: '8ae62a17',
            author: 'JustBBox',
            date: '27 apr, 2021',
            time: '1 ч 20 мин'
        },
        {
            id: '#881',
            status: 'progress',
            message: 'Add connection retries',
            branch: 'master',
            commitHash: 'a5834acc',
            author: 'JustBBox',
            date: '27 apr, 2021',
            time: '1 ч 20 мин'
        },
        {
            id: '#684',
            status: 'approved',
            message: 'Add logging',
            branch: 'master',
            commitHash: '50a9c0db',
            author: 'JustBBox',
            date: '13 apr, 2021',
            time: '1 ч 20 мин'
        }]
};

//reducer
export function commitsReducer (state = initialState, action) {
    return state;
}

// selectors
export const getCommits = (state) => state.commits.data;
