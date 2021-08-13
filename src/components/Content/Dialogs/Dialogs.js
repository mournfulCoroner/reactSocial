import React from 'react';
import style from './Dialogs.module.css'
import Contact from './Contact/Contact';
import Message from './Message/Message';

const Dialogs = (props) => {
    let messages = props.state.messages.map((mes) => <Message key={mes.id} id={mes.id} message_text={mes.message_text} self={mes.self} />)
    let contacts = props.state.contacts.map((contact) => <Contact key={contact.id} id={contact.id} username={contact.username}  />)
    let activeTextMessage = React.createRef();

    let submitMessage = () => {
        let text = activeTextMessage.current.value;
        alert(text);
    }
    
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_list}>
                {
                    contacts
                }
            </div>
            <div className={style.messages_block}>
                <div className={style.messages_block__messages}>
                {
                    messages
                }
                </div>
                <div className={style.messages_block__submit_area}>
                    <textarea ref={activeTextMessage} className={style.messages_block__submit_text} placeholder='Введите сообщение'></textarea>
                    <button onClick={ submitMessage } className={style.messages_block__submit_button}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;