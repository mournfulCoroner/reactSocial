import React from 'react';
import styles from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={
        props.self ? `${styles.message} ${styles.self}` : `${styles.message}`
        }>{props.message_text}</div>
    )
}

export default Message;