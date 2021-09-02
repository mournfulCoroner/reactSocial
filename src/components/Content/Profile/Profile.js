import styles from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import WallContainer from './Wall/WallContainer';

function Profile(props) {
    return (
        <div className={styles.profile}>
            <ProfileHeader updateUserStatus={props.updateUserStatus} saveAvatar={props.saveAvatar}
             isOwner={props.isOwner} user={props.user} status={props.status} saveUserInfo={props.saveUserInfo}/>
            <WallContainer store={props.store}/>
        </div>
    );
}

export default Profile;