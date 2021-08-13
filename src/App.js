import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import FriendsBlock from './components/FriendsBlock/FriendsBlock';
import Header from './components/Header/Header.js'
import Menu from './components/Menu/Menu';


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Header />
          <FriendsBlock state={props.state.friendsBar}/>
          <Menu />
          <Content state={props.state} addPost={props.addPost}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
