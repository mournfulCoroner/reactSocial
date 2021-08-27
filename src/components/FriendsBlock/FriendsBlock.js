import { useState } from 'react';
import FriendPile from './FriendPile/FriendPile';
import styles from './FriendsBlock.module.css';


const FriendsBlock = (props) => {
    let friends = props.friendBar.friends.map((friend) => <FriendPile key={friend.id} id={friend.id} friend_name={friend.friend_name} />);
    
    let [isOpenFriends, setIsOpenFriends] = useState(false);
    let open_friends = (e) => {
        setIsOpenFriends(!isOpenFriends);
        !isOpenFriends ? e.currentTarget.style.left = '116px' : e.currentTarget.style.left = '0px'
    }
    
    return (
        <div className={styles.fblock}>
            <div className={styles.fblock__close}>
                <button className={styles.fblock__button} onClick={ open_friends }>{'>'}</button>
            </div>
            <div className={
                isOpenFriends ? `${styles.fblock__open} ${styles.active}` : `${styles.fblock__open}`}>
                <p className={styles.ftitle}>Palms</p>
                <div className={styles.fblock__friends}>
                    {friends}
                </div>
            </div>
        </div>
    )
}

export default FriendsBlock;