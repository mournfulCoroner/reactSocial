import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setProfileUser } from "../../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { profileAPI } from "../../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            debugger
            userId = this.props.id;
        }
        profileAPI.getUserData(userId).then((data) => {
            this.props.setProfileUser(data);
        })
    }

    render() {
        return (
            <Profile {...this.props} user={this.props.user}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        user: state.profile.user,
        id: state.auth.id
    }
}

let WithUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setProfileUser
}) (WithUrlProfileContainer);