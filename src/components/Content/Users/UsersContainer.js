import React from "react";
import { connect } from "react-redux";
import { followUser, setActivePage, setTotalUsersCount, setUsers, toggleFetching } from "../../../redux/users-reducer";
import Users from "./Users";
import { usersAPI } from "../../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFetching(true);
        usersAPI.getUsers(this.props.activePage, this.props.pageSize).then((data) => {
            this.props.toggleFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChange = (activePage) => {
        this.props.setActivePage(activePage);
        this.props.toggleFetching(true);
        usersAPI.getUsers(this.props.activePage, this.props.pageSize).then((data) => {
                this.props.toggleFetching(false);
                this.props.setUsers(data.items);
            })
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
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps,
    {
        followUser,
        setUsers,
        setActivePage,
        setTotalUsersCount,
        toggleFetching
    }
)(UsersContainer);