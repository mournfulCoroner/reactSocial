import FriendPile from './FriendPile/FriendPile';
import style from './FriendsBlock.module.css';


const FriendsBlock = (props) => {
    let friends = props.state.friends.map((friend) => <FriendPile id={friend.id} friend_name={friend.friend_name} />);
    return (
        <div className={style.fblock}>
            <p className={style.ftitle}>Palms</p>
            <div className={style.fblock__friends}>
                {friends}
            </div>
        </div>
    )
}

export default FriendsBlock;