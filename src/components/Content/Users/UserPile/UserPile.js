import style from './../Users.module.css'

const UserPile = (props) => {

    let onFollow = () => {
        props.follow(props.id);
    }
    return (
        <div className={style.userPile}>
            <img src={props.avatar} className={style.avatar} alt=''></img>
            <div>{props.userName}</div>
            <div className={style.status_block}>{props.status}</div>
            <button onClick={ onFollow } className={
                props.isFollow ? `${style.unfollow_button}` : `${style.follow_button}`
            }>{
                props.isFollow ? 'Отписаться' : 'Подписаться'
            }
            </button>
        </div>
    )
}

export default UserPile;