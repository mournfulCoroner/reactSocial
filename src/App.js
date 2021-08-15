import './App.css';
import Content from './components/Content/Content';
import FriendsBlock from './components/FriendsBlock/FriendsBlock';
import Header from './components/Header/Header.js'
import Menu from './components/Menu/Menu';


function App(props) {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <FriendsBlock state={props.store.getState().friendBar} />
        <Menu />
        <Content store={props.store} />
      </div>
    </div>
  );
}

export default App;
