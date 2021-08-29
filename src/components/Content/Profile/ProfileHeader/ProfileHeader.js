import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './PorfileStatus';
import styles from './ProfileHeader.module.css';

function ProfileHeader(props) {

    if (!props.user) {
        return <Preloader />
    }

    let savePhoto = (e) => {
        if(e.target.files.length){
            props.saveAvatar(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={styles.back_profile}>
                <img alt='' src='https://st.depositphotos.com/1006076/3995/i/600/depositphotos_39951147-stock-photo-spring-landscape-watercolor-flowering-trees.jpg'></img>
            </div>
            <div className={styles.profileHeader}>
                <div className={styles.name}>{props.user.fullName}</div>
                <div>
                    <div className={styles.avatar}>
                        <img alt='' src={props.user.photos.large || 'https://pm1.narvii.com/6526/3c85b728f80710521171197855342fd1d88876fb_hq.jpg'}></img>
                    </div>
                    {props.isOwner ? <input type='file' onChange={ savePhoto } /> : null}
                </div>
            </div>
            <ProfileStatus isOwner={props.isOwner}
                status={props.status} updateUserStatus={props.updateUserStatus} />
        </div>
    );
}

export default ProfileHeader;