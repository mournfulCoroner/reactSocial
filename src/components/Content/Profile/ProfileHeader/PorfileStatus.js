import React, { useEffect, useState } from 'react';
import styles from './ProfileHeader.module.css';

const ProfileStatus = (props) => {

    const [isEdit, setIsEdit] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    let enableEditMode = () => {
        if (props.isOwner) {
            setIsEdit(true);
        }
    }

    let disableEditMode = () => {
        setIsEdit(false);
        props.updateUserStatus(status);
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    // componentDidUpdate(prevProps, prevState){
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({ status: this.props.status })
    //     }
    // }

    return (
        <div className={styles.profile_status}>
            {
                !isEdit ?
                    <div onDoubleClick={enableEditMode} className={styles.description}>{status}</div> :
                    <input autoFocus={true} onBlur={disableEditMode} onChange={onStatusChange}
                        className={styles.description_input} value={status}></input>
            }
        </div>
    );

}

export default ProfileStatus;