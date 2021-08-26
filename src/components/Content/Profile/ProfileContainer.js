import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfileThunk, updateUserStatus } from "../../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import authRedirectHoc from "../../../hoc/authRedirectHoc";
import { compose } from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id;
            if(!userId){
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfileThunk(userId);
    }

    render() {
        return (
            <Profile {...this.props} user={this.props.user} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        user: state.profile.user,
        id: state.auth.id,
        status: state.profile.status
    }
}

export default compose(
    connect(mapStateToProps, {
        getUserProfileThunk,
        updateUserStatus
    }),
    withRouter,
    // authRedirectHoc
)(ProfileContainer)