import dialogsReducer from "./dialogs-reducer";
import friendBarReducer from "./friendBar-reducer";
import profileReducer from "./profile-reducer";


let store = {
    _state: {
        profile: {
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
        },
        dialogs: {
            contacts: [
                {
                    id: 1,
                    username: 'Алексей'
                },
                {
                    id: 2,
                    username: 'Андрей'
                },
                {
                    id: 3,
                    username: 'Алина'
                }
            ],
            messages: [
                {
                    id: 1,
                    message_text: 'Сообщение 1',
                    self: false
                },
                {
                    id: 2,
                    message_text: 'Сообщение 2',
                    self: false
                },
                {
                    id: 3,
                    message_text: 'Ответ',
                    self: true
                }
            ],
            newMessageText: ''
        },
        friendsBar: {
            friends: [
                {
                    id: 1,
                    friend_name: 'Константин'
                },
                {
                    id: 2,
                    friend_name: 'Олеся'
                }
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() { console.log('state has been changed'); },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.friendsBar = friendBarReducer(this._state.friendsBar, action);

        this._callSubscriber(this._state);
    }
}

export default store;