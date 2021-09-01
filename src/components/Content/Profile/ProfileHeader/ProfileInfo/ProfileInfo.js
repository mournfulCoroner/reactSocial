import styles from './../ProfileHeader.module.css';


const ProfileInfo = (props) => {
    return (
        <div>
            {props.user.aboutMe ? <div className={styles.profile_info}>
                {props.user.aboutMe}
            </div> : null}
            <div className={styles.profile_info}>
                <div className={styles.job_block}>
                    Looking for a job? {props.user.lookingForAJob ? 'Yes!' : 'No!'}
                    <br />
                    {props.user.lookingForAJobDescription || null}
                </div>
                <br />
                <div className={styles.contacts_block}>
                    My Contacts:
                    <br />
                    <ul>
                        <li>github: {props.user.contacts.github || '-'}</li>
                        <li>vk: {props.user.contacts.vk || '-'}</li>
                        <li>facebook: {props.user.contacts.facebook || '-'}</li>
                        <li>instagram: {props.user.contacts.instagram || '-'}</li>
                        <li>twitter: {props.user.contacts.twitter || '-'}</li>
                        <li>website: {props.user.contacts.website || '-'}</li>
                        <li>youtube: {props.user.contacts.youtube || '-'}</li>
                        <li>mainLink: {props.user.contacts.mainLink || '-'}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;