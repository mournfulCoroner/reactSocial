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
                    <br /> <br />
                    {props.user.lookingForAJobDescription || null}
                </div>
                <br />
                <div className={styles.contacts_block}>
                    My Contacts:
                    <br />
                    <ul>
                        {
                            Object.entries(props.user.contacts).map((entry) => {
                                return <li key={entry[0]}>{entry[0]}: {entry[1] || '-'}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;