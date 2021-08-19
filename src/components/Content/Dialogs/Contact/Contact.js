import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './../Dialogs.module.css'

const Contact = (props) => {
    return (
        <div className={styles.contact}>
            <NavLink className={styles.contact_link} activeClassName={styles.contact_activelink} to={'/messages/' + props.id}>{props.username}</NavLink>
        </div>
    )
}

export default Contact;