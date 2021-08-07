import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header.js'
import Menu from './components/Menu/Menu';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Header />
          <Menu />
          <Content />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
