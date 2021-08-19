import FriendPile from './FriendPile/FriendPile';
import styles from './FriendsBlock.module.css';


const FriendsBlock = (props) => {
    let friends = props.friendBar.friends.map((friend) => <FriendPile key={friend.id} id={friend.id} friend_name={friend.friend_name} />);
    
    // let open_friends = () => {
    //     stateFr = !stateFr;
    // }
    
    let stateFr = false;
    
    return (
        <div className={styles.fblock}>
            {/* <div className={styles.fblock__close}>
                <button className={styles.fblock__button} onClick={open_friends}>rk</button>
            </div> */}
            <div className={
                stateFr ? `${styles.fblock__open} ${styles.active}` : `${styles.fblock__open}`}>
                <p className={styles.ftitle}>Palms</p>
                <div className={styles.fblock__friends}>
                    {friends}
                </div>
            </div>
        </div>
    )
}

export default FriendsBlock;