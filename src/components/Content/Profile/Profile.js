import styles from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import WallContainer from './Wall/WallContainer';

function Profile(props) {
    return (
        <div className={styles.profile}>
            <div className={styles.back_profile}>
                <img alt='' src='https://st.depositphotos.com/1006076/3995/i/600/depositphotos_39951147-stock-photo-spring-landscape-watercolor-flowering-trees.jpg'></img>
            </div>
            <ProfileHeader />
            <div className={styles.description}>О себе ничего пока сказать не могу. Посмотрим, что будет дальше.</div>
            <WallContainer store={props.store}/>
        </div>
    );
}

export default Profile;