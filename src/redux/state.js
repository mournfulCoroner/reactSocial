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
                message_text: 'Сообщение 1'
            },
            {
                id: 2,
                message_text: 'Сообщение 2'
            }
        ]
    }
}

export default state;