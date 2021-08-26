import profileReducer, { addPostActionCreator } from "./profile-reducer"
let state = {
    posts: [
        {
            id: 1, post_text: 'Данил хомячок', likes: 20
        },
        {
            id: 2, post_text: 'Или нет??', likes: 25
        }
    ]
};

test('adding new post to wall (check amount)', () => {

    let action = addPostActionCreator('Тестируем стену!');
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
})

test('adding new post to wall (check text)', () => {

    let action = addPostActionCreator('Тестируем стену!');
    let newState = profileReducer(state, action);

    expect(newState.posts[0].post_text).toBe('Тестируем стену!');
})