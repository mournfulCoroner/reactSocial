import style from './Profile_header.module.css';

function Profile_header() {
    return (
        <div className={style.profile_header}>
            <div className={style.name}>Алексеев Владислав</div>
            <div className={style.avatar}>
                <img src='https://pm1.narvii.com/6526/3c85b728f80710521171197855342fd1d88876fb_hq.jpg'></img>
            </div>
        </div>
    );
}

export default Profile_header;