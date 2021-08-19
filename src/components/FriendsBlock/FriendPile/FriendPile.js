import styles from './../FriendsBlock.module.css';

const FriendPile = (props) => {
    return (
        <div id={props.id} className={styles.friend_pile}>
            <img src='https://sc1.musik-produktiv.com/pic-007804074xxl/jupiter-jep1000.jpg' alt='' className={styles.friend_pile__avatar}></img>
            <div className={styles.friend_pile__name}>{props.friend_name}</div>
        </div>
    )
}

export default FriendPile