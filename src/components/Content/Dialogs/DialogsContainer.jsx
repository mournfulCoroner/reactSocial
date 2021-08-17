import { connect } from 'react-redux';
import { addMessageCreator, updateNewMessageTextCreator } from '../../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return{
        dialogs: state.dialogs
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addMessage:() => {
            dispatch(addMessageCreator());
        },

        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;