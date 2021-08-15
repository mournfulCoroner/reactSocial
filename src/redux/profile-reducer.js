const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {
            id: 1,
            post_text: 'Данил хомячок',
            likes: 20
        },
        {
            id: 2,
            post_text: 'Или нет??',
            likes: 25
        }
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 6,
                post_text: state.newPostText,
                likes: 0
            }
            state.posts.push(post);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.textPost;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, textPost: text })

export default profileReducer;