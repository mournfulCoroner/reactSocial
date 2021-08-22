import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import authRedirectHoc from '../../../hoc/authRedirectHoc';
import { addMessageCreator, updateNewMessageTextCreator } from '../../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

class DialogsContainer extends React.Component{
    render () {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return <Dialogs {...this.props} /> 
    }
}

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

export default compose( connect(mapStateToProps, mapDispatchToProps),
    authRedirectHoc) (DialogsContainer) 