import logo from './logo.svg'
import './App.css';
import Header from './components/header'
import About from './components/About'
import Tools from "./components/Tools"
import Projects from './components/Projects';

function App() {
  const n = new Date()
  return (
    <div className="App">

      <Header/>
      <About/>
      <Tools/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
      <Projects/>  

    <div className='footer'>
      <h2>Let's Connect!</h2>
      <a
            className="App-link"
            href="https://www.linkedin.com/in/kimberlyrodriguez95/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Linked-In" src="#"/>
          </a>

          <a
            className="App-link"
            href="https://github.com/kim5981"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="GitHub" src="#"/>
          </a>
          <p>Copyright { n.getFullYear() } All Rights Reserved</p>
    </div>
        
      
    </div>
  );
}

export default App;
