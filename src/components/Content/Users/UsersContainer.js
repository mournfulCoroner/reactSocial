import React from "react";
import * as axios from 'axios'
import { connect } from "react-redux";
import { followAction, setActivePageAction, setTotalUsersCountAction, setUsersAction } from "../../../redux/users-reducer";
import Users from "./Users";


class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }


    onPageChange = (activePage) => {
        this.props.setActivePage(activePage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${activePage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
        })
    }
    render() {
        return <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
        activePage={this.props.activePage} onPageChange={this.props.onPageChange} 
        getUsers={this.props.getUsers} followUser={this.props.followUser} 
        users={this.props.users}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        activePage: state.usersPage.activePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {dispatch(followAction(userId))},
        setUsers: (users) => {dispatch(setUsersAction(users))},
        setActivePage: (activePage) => {dispatch(setActivePageAction(activePage))},
        setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountAction(totalCount))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);