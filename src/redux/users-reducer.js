
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';


let initialState = {
    users: [
    ],
    pageSize: 9,
    totalUsersCount: 0,
    activePage: 1,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if(user.id === action.userId){
                        return {...user,
                            followed: !user.followed
                        }
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {...state, users: action.users}

        case SET_ACTIVE_PAGE:
            return {...state, activePage: action.activePage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}

        case TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }

}

export const followUser = (userId) => ({type: FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setActivePage = (activePage) => ({type: SET_ACTIVE_PAGE, activePage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});


export default usersReducer;