import React from 'react';
import styles from './ProfileHeader.module.css';

class ProfileStatus extends React.Component {

    state = {
        isEdit: false
    }

    enableEditMode = () => {
        this.setState({
            isEdit: true
        })
    }

    disableEditMode = () => {
        this.setState({
            isEdit: false
        })
    }

    render() {
        return (
            <div className={styles.profile_status}>
                {
                    !this.state.isEdit ?
                        // this.props.aboutMe && 
                        <div onDoubleClick={ this.enableEditMode } className={styles.description}>{this.props.aboutMe}</div> :
                        <input autoFocus={true} onBlur={this.disableEditMode} className={styles.description_input} value={this.props.aboutMe}></input>
                }
            </div>
        );
    }
}

export default ProfileStatus;