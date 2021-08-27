import React, { useEffect } from "react";
import { connect } from "react-redux";
import { followUserThunk, getUsersThunk, setActivePage, toggleIsFollowingProgress } from "../../../redux/reducers/users-reducer";
import Users from "./Users";


const UsersContainer = (props) => {

    useEffect(() => {
        props.getUsers(props.activePage, props.pageSize);
    }, [props.activePage])// eslint-disable-line react-hooks/exhaustive-deps

    return <Users {...props} />
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        activePage: state.usersPage.activePage,
        isFetching: state.usersPage.isFetching,
        isFollowingProgress: state.usersPage.isFollowingProgress,
        pageRange: state.usersPage.pageRange
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