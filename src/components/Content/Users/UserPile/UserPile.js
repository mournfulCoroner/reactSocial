import { NavLink } from 'react-router-dom';
import styles from './../Users.module.css';

const UserPile = (props) => {

    let onFollow = () => {
       props.followUser(props.id, props.isFollow);
    }
    
    return (
        <div className={styles.userPile}>
            <NavLink to={`/profile/${props.id}`}><img src={props.avatar} className={styles.avatar} alt=''></img></NavLink>
            <div className={styles.userName_block}>{props.userName}</div>
            <div className={styles.status_block}>{props.status}</div>
            <button onClick={onFollow} disabled={props.isFollowingProgress.some(id => id === props.id)} className={
                props.isFollow ? `${styles.unfollow_button}` : `${styles.follow_button}`
            }>
                {
                    props.isFollow ? 'Отписаться' : 'Подписаться'
                }
            </button>
        </div>
    )
}

export default UserPile;