import React from 'react';
import styles from './Dialogs.module.css'
import Contact from './Contact/Contact';
import Message from './Message/Message';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MessageForm = (props) => {
    return (
        <Formik
            initialValues={{ textMessage: '' }}
            validationSchema={Yup.object({
                textMessage: Yup.string()
                    .required().max(300)
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    props.addMessage(values.textMessage);
                    values.textMessage = '';
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmittig, values }) => (
                <Form className={styles.messages_block__submit_area}>
                    <Field name='textMessage' as='textarea' value={values.textMessage}
                    className={styles.messages_block__submit_text} placeholder='Введите сообщение' />
                    <button disabled={isSubmittig}
                    className={styles.messages_block__submit_button} type='submit'>Отправить</button>
                </Form>)}
        </Formik>
    )
}

const Dialogs = (props) => {
    let messages = props.dialogs.messages.map((mes) => <Message key={mes.id} id={mes.id} message_text={mes.message_text} self={mes.self} />)
    let contacts = props.dialogs.contacts.map((contact) => <Contact key={contact.id} id={contact.id} username={contact.username}  />)

    let submitMessage = () => {
        props.addMessage();
    }

    let onChangeNewMessage = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }
    
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_list}>
                {
                    contacts
                }
            </div>
            <div className={styles.messages_block}>
                <div className={styles.messages_block__messages}>
                {
                    messages
                }
                </div>
                <MessageForm addMessage={props.addMessage} />
                {/* <div className={styles.messages_block__submit_area}>
                    <textarea onChange={ onChangeNewMessage } value={props.dialogs.newMessageText} className={styles.messages_block__submit_text} placeholder='Введите сообщение'></textarea>
                    <button onClick={ submitMessage } className={styles.messages_block__submit_button}>Отправить</button>
                </div> */}
            </div>
        </div>
    )
}

export default Dialogs;