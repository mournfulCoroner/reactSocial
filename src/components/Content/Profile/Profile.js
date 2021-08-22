import styles from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import WallContainer from './Wall/WallContainer';

function Profile(props) {
    return (
        <div className={styles.profile}>
            <ProfileHeader updateUserStatus={props.updateUserStatus} user={props.user} status={props.status}/>
            <WallContainer store={props.store}/>
        </div>
    );
}

export default Profile;