import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/Content/common/Preloader/Preloader';
import Content from './components/Content/Content';
import FriendsBlockContainer from './components/FriendsBlock/FriendsBlockContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Menu from './components/Menu/Menu';
import { initSuccess } from './redux/app-reducer';


class App extends React.Component {

  componentDidMount(){
    this.props.initSuccess();
  }

  render() {
    if(!this.props.isInitialized){
      return <Preloader />
    }
    return (
      <div className="App">
        <div className="wrapper">
          <HeaderContainer />
          <FriendsBlockContainer />
          <Menu />
          <Content />
        </div>
      </div>
    );
  }
}


let mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initSuccess})
)(App);
