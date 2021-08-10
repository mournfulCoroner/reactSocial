import React from 'react';
import style from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={
        props.self ? `${style.message} ${style.self}` : `${style.message}`
        }>{props.message_text}</div>
    )
}

export default Message;