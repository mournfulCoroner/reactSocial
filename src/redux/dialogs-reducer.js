const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
            let message = {
                id: 7,
                message_text: state.newMessageText,
                self: true
            }
            return { ...state,
                newMessageText: '',
                messages: [ ...state.messages, message]
            };
        
        case UPDATE_NEW_MESSAGE_TEXT: 
            return{ ...state,
                newMessageText: action.textMessage,
            };

        default:
            return state;
    }
}

export const addMessageCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, textMessage: text })

export default dialogsReducer;