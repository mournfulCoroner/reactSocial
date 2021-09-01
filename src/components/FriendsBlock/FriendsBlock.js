import { useState } from 'react';
import FriendPile from './FriendPile/FriendPile';
import styles from './FriendsBlock.module.css';


const FriendsBlock = (props) => {
    let friends = props.friendBar.friends.map((friend) => <FriendPile key={friend.id} id={friend.id} friend_name={friend.friend_name} />);
    
    let [isOpenFriends, setIsOpenFriends] = useState(false);
    let open_friends = (e) => {
        setIsOpenFriends(!isOpenFriends);        
    }
    
    return (
        <div className={isOpenFriends ? `${styles.fblock} ${styles.active}` : `${styles.fblock}`}>
            <div className={styles.fblock__close}>
                <button className={styles.fblock__button} onClick={ open_friends }>{!isOpenFriends ? '>' : '<'}</button>
            </div>
            <div className={styles.fblock__open
                /* isOpenFriends ? `${styles.fblock__open} ${styles.active}` : `${styles.fblock__open}` */}>
                <p className={styles.ftitle}>Palms</p>
                <div className={styles.fblock__friends}>
                    {friends}
                </div>
            </div>
        </div>
    )
}

export default FriendsBlock;