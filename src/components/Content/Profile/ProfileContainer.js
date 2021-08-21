import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfileThunk } from "../../../redux/profile-reducer";
import { withRouter } from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.id;
        }
        this.props.getUserProfileThunk(userId);
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
    getUserProfileThunk
}) (WithUrlProfileContainer);