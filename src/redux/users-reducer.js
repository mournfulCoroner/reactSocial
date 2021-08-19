
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';


let initialState = {
    users: [
    ],
    pageSize: 9,
    totalUsersCount: 0,
    activePage: 1
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if(user.id === action.userId){
                        return {...user,
                            isFollow: !user.isFollow
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
        default:
            return state;
    }

}

export const followAction = (userId) => ({type: FOLLOW, userId});
export const setUsersAction = (users) => ({type: SET_USERS, users});
export const setActivePageAction = (activePage) => ({type: SET_ACTIVE_PAGE, activePage});
export const setTotalUsersCountAction = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});


export default usersReducer;