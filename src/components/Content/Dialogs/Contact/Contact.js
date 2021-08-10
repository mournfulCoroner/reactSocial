import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css'

const Contact = (props) => {
    return (
        <div className={style.contact}>
            <NavLink className={style.contact_link} activeClassName={style.contact_activelink} to={'/messages/' + props.id}>{props.username}</NavLink>
        </div>
    )
}

export default Contact;