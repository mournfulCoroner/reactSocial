import React from 'react';
import { addMessageCreator, updateNewMessageTextCreator } from '../../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogs;

    debugger;
    let submitMessage = () => {
        props.store.dispatch(addMessageCreator());
    }

    let onChangeNewMessage = (text) => {
        props.store.dispatch(updateNewMessageTextCreator(text));
    }

    return (
        <Dialogs addMessage={submitMessage} updateNewMessageText={onChangeNewMessage}
            messages={state.messages} contacts={state.contacts} newMessageText={state.newMessageText}/>
    )
}

export default DialogsContainer;