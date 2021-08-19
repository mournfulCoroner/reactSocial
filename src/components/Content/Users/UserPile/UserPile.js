import styles from './../Users.module.css'

const UserPile = (props) => {

    let onFollow = () => {
        props.follow(props.id);
    }
    return (
        <div className={styles.userPile}>
            <img src={props.avatar} className={styles.avatar} alt=''></img>
            <div>{props.userName}</div>
            <div className={styles.status_block}>{props.status}</div>
            <button onClick={ onFollow } className={
                props.isFollow ? `${styles.unfollow_button}` : `${styles.follow_button}`
            }>{
                props.isFollow ? 'Отписаться' : 'Подписаться'
            }
            </button>
        </div>
    )
}

export default UserPile;