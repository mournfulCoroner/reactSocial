import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './PorfileStatus';
import styles from './ProfileHeader.module.css';

function ProfileHeader(props) {

    if(!props.user){
        return <Preloader />
    }

    return (
        <div>
            <div className={styles.back_profile}>
                <img alt='' src='https://st.depositphotos.com/1006076/3995/i/600/depositphotos_39951147-stock-photo-spring-landscape-watercolor-flowering-trees.jpg'></img>
            </div>
            <div className={styles.profileHeader}>
            <div className={styles.name}>{props.user.fullName}</div>
            <div className={styles.avatar}>
                <img alt='' src={props.user.photos.small || 'https://pm1.narvii.com/6526/3c85b728f80710521171197855342fd1d88876fb_hq.jpg'}></img>
            </div>
            </div>
            <ProfileStatus aboutMe={props.user.aboutMe}/>
        </div>
    );
}

export default ProfileHeader;