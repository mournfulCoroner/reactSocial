import renderAll from "../render";

let state = {
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
        ]
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
        ]
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
}

let addPost = (textPost) => {
    let post = {
        id: 6,
        post_text: textPost,
        likes: 0
    }
    state.profile.posts.push(post);
    renderAll(state);
}

export { addPost};
export default state;