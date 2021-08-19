import './App.css';
import Content from './components/Content/Content';
import FriendsBlockContainer from './components/FriendsBlock/FriendsBlockContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Menu from './components/Menu/Menu';


function App() {
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

export default App;
