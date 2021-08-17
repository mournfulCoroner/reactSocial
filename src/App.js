import './App.css';
import Content from './components/Content/Content';
import FriendsBlockContainer from './components/FriendsBlock/FriendsBlockContainer';
import Header from './components/Header/Header.js'
import Menu from './components/Menu/Menu';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <FriendsBlockContainer />
        <Menu />
        <Content />
      </div>
    </div>
  );
}

export default App;
