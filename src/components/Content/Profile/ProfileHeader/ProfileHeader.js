import styles from './ProfileHeader.module.css';

function ProfileHeader() {
    return (
        <div className={styles.profileHeader}>
            <div className={styles.name}>Алексеев Владислав</div>
            <div className={styles.avatar}>
                <img alt='' src='https://pm1.narvii.com/6526/3c85b728f80710521171197855342fd1d88876fb_hq.jpg'></img>
            </div>
        </div>
    );
}

export default ProfileHeader;