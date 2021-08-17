import { connect } from "react-redux"
import FriendsBlock from "./FriendsBlock"

let mapStateToProps = (state) => {
    return {
        friendBar: state.friendBar
    }
}

const FriendsBlockContainer = connect(mapStateToProps, null)(FriendsBlock);

export default FriendsBlockContainer;