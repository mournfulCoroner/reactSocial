import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './PorfileStatus';
import styles from './ProfileHeader.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import greendots from './../../../../assets/images/green_dots.svg'
import { useState } from 'react';
import ProfileInfoForm from './ProfileInfo/ProfileInfoForm';

function ProfileHeader(props) {

    const [editInfoMode, setEditInfoMode] = useState(false);

    if (!props.user) {
        return <Preloader />
    }

    let savePhoto = (e) => {
        if (e.target.files.length) {
            props.saveAvatar(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={styles.back_profile}>
                <img alt='' src={greendots}></img>
            </div>
            <div className={styles.profileHeader}>
                <div className={styles.name}>{props.user.fullName}</div>
                <div className={styles.avatar_block}>
                    <div className={styles.avatar}>
                        <img alt='' src={props.user.photos.large || 'https://pm1.narvii.com/6526/3c85b728f80710521171197855342fd1d88876fb_hq.jpg'}></img>
                    </div>
                    {props.isOwner ? <div>
                        <label htmlFor='avatar-upload' className={styles.avatar_button}>Загрузить фото</label>
                        <input id='avatar-upload' type='file' onChange={savePhoto} />
                    </div>
                        : null}
                </div>
            </div>
            <ProfileStatus isOwner={props.isOwner}
                status={props.status} updateUserStatus={props.updateUserStatus}  />
            {editInfoMode ? <ProfileInfoForm user={props.user} setEditInfoMode={setEditInfoMode} saveUserInfo={props.saveUserInfo}/> :
                <ProfileInfo user={props.user} isOwner={props.isOwner} />}

            {props.isOwner && !editInfoMode && <button onClick={() => { setEditInfoMode(true) }} className={styles.edit_button}>Редактировать</button>}
        </div>
    );
}

export default ProfileHeader;