import { NavLink } from 'react-router-dom';
import styles from './../Users.module.css';
import { usersAPI } from '../../../../api/api';

const UserPile = (props) => {

    let onFollow = () => {
        if (props.isFollow) {
           usersAPI.deleteFollow(props.id).then((data) => {
                    if (data.resultCode === 0) {
                        props.followUser(props.id);
                    }
                })
                
        }
        else {
            usersAPI.postFollow(props.id).then((data) => {
                    if (data.resultCode === 0) {
                        props.followUser(props.id);
                    }
                })
        }
    }
    
    return (
        <div className={styles.userPile}>
            <NavLink to={`/profile/${props.id}`}><img src={props.avatar} className={styles.avatar} alt=''></img></NavLink>
            <div>{props.userName}</div>
            <div className={styles.status_block}>{props.status}</div>
            <button onClick={onFollow} className={
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