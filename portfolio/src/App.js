import logo from './logo.svg'
import './App.css';
import Header from './components/header'
import About from './components/About'
import Tools from "./components/Tools"
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Tools/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
      <Projects/>  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
    </div>
  );
}

export default App;
