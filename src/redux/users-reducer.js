
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        // {id: 1, avatar:'http://pm1.narvii.com/6753/c4eb6e88ad361c046084f830244dde469cd458ccv2_00.jpg', fullName: 'Алексей', status: 'Hello there!', isFollow: true},
        // {id: 2, avatar:'http://pm1.narvii.com/6753/c4eb6e88ad361c046084f830244dde469cd458ccv2_00.jpg', fullName: 'Катя', status: 'Блистай!', isFollow: false},
        // {id: 3, avatar:'http://pm1.narvii.com/6753/c4eb6e88ad361c046084f830244dde469cd458ccv2_00.jpg', fullName: 'Малина', status: 'Eat me', isFollow: false},
        // {id: 4, avatar:'http://pm1.narvii.com/6753/c4eb6e88ad361c046084f830244dde469cd458ccv2_00.jpg', fullName: 'Константин', status:'Йо йо йо', isFollow: true}
    ]
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

        default:
            return state;
    }

}

export const followAction = (userId) => ({type: FOLLOW, userId});
export const setUsersAction = (users) => ({type: SET_USERS, users});


export default usersReducer;