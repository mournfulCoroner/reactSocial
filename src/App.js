import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Menu from './components/Menu';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Menu />
        <Content />
      </div>
    </div>
  );
}

export default App;
