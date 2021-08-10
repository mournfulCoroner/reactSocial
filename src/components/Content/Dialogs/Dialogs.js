import React from 'react';
import style from './Dialogs.module.css'
import Contact from './Contact/Contact';
import Message from './Message/Message';

const Dialogs = (props) => {

    let messages = props.state.messages.map((mes) => <Message key={mes.id} id={mes.id} message_text={mes.message_text} />)
    let contacts = props.state.contacts.map((contact) => <Contact key={contact.id} id={contact.id} username={contact.username}  />)
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_list}>
                {
                    contacts
                }
            </div>
            <div className={style.messages_block}>
                {
                    messages
                }
            </div>
        </div>
    )
}

export default Dialogs;