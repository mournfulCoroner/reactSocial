import UserPile from './UserPile/UserPile';
import style from './Users.module.css'

const Users = (props) => {

    debugger;
    if(props.users.length === 0){
        props.setUsers([{id: 1, avatar:'http://pm1.narvii.com/6753/c4eb6e88ad361c046084f830244dde469cd458ccv2_00.jpg', fullName: 'Алексей', status: 'Hello there!', isFollow: true},
        {id: 2, avatar:'http://pm1.narvii.com/6753/c4eb6e88ad361c046084f830244dde469cd458ccv2_00.jpg', fullName: 'Катя', status: 'Блистай!', isFollow: false},
        {id: 3, avatar:'http://pm1.narvii.com/6753/c4eb6e88ad361c046084f830244dde469cd458ccv2_00.jpg', fullName: 'Малина', status: 'Eat me', isFollow: false},
        {id: 4, avatar:'http://pm1.narvii.com/6753/c4eb6e88ad361c046084f830244dde469cd458ccv2_00.jpg', fullName: 'Константин', status:'Йо йо йо', isFollow: true}])
    }

    let users = props.users.map((user) => <UserPile key={user.id} id={user.id}
    userName={user.fullName} status={user.status} isFollow={user.isFollow}
    follow={props.followUser} avatar={user.avatar} />)
    return (
        <div className={style.users_wrapper}>
            {users}
        </div>
    )
}

export default Users;