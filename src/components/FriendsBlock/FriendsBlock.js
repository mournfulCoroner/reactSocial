import { render } from '@testing-library/react';
import FriendPile from './FriendPile/FriendPile';
import style from './FriendsBlock.module.css';


const FriendsBlock = (props) => {
    let friends = props.state.friends.map((friend) => <FriendPile key={friend.id} id={friend.id} friend_name={friend.friend_name} />);
    
    let open_friends = () => {
        stateFr = !stateFr;
    }
    
    let stateFr = false;
    
    return (
        <div className={style.fblock}>
            {/* <div className={style.fblock__close}>
                <button className={style.fblock__button} onClick={open_friends}>rk</button>
            </div> */}
            <div className={
                stateFr ? `${style.fblock__open} ${style.active}` : `${style.fblock__open}`}>
                <p className={style.ftitle}>Palms</p>
                <div className={style.fblock__friends}>
                    {friends}
                </div>
            </div>
        </div>
    )
}

export default FriendsBlock;