import React from "react";
import { connect } from "react-redux";
import { followUserThunk, getUsersThunk, setActivePage, toggleIsFollowingProgress } from "../../../redux/users-reducer";
import Users from "./Users";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.activePage, this.props.pageSize);
    }

    onPageChange = (activePage) => {
        this.props.setActivePage(activePage);
        this.props.getUsers(this.props.activePage, this.props.pageSize);       
    }

    render() {
        return <Users {...this.props} onPageChange={this.onPageChange} />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        activePage: state.usersPage.activePage,
        isFetching: state.usersPage.isFetching,
        isFollowingProgress: state.usersPage.isFollowingProgress
    }
}

export default connect(mapStateToProps,
    {
        setActivePage,
        toggleIsFollowingProgress,
        getUsers: getUsersThunk,
        followUser: followUserThunk
    }
)(UsersContainer);