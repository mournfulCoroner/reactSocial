import React from 'react';
import styles from './ProfileHeader.module.css';

class ProfileStatus extends React.Component {

    state = {
        isEdit: false,
        status: this.props.status
    }

    enableEditMode = () => {
        this.setState({
            isEdit: true
        })
    }

    disableEditMode = () => {
        this.setState({
            isEdit: false
        });
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return (
            <div className={styles.profile_status}>
                {
                    !this.state.isEdit ?
                        // this.props.status && 
                        <div onDoubleClick={ this.enableEditMode } className={styles.description}>{this.state.status}</div> :
                        <input autoFocus={true} onBlur={ this.disableEditMode } onChange={this.onStatusChange}
                        className={styles.description_input} value={this.state.status}></input>
                }
            </div>
        );
    }
}

export default ProfileStatus;