import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header.js'
import Menu from './components/Menu/Menu';


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Header />
          <Menu />
          <Content state={props.state}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
