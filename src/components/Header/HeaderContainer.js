import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import { headerAPI } from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        headerAPI.getAuth().then((data) => {
            if (data.resultCode === 0) {
                this.props.setAuthUserData(data.data);
            }
        })
    }

    render() {
        return (<Header {...this.props} />)
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login 
    }
}

export default connect(mapStateToProps, {
    setAuthUserData
})(HeaderContainer)