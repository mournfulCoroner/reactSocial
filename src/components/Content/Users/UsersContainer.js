import { connect } from "react-redux";
import { followAction, setUsersAction } from "../../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {dispatch(followAction(userId))},
        setUsers: (users) => {dispatch(setUsersAction(users))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users);