import './App.css';
import Header from './components/header'
import About from './components/About'
import Tools from "./components/Tools"
import Projects from './components/Projects';

import github from "./github-logo.png"
import linkedin from "./linkedin-logo.png"


function App() {
  const n = new Date()
  return (
    <div className="App">

      <Header/>
      <About/>
      <Tools/>  
      <Projects/>  

    <footer>
      <h2>Let's Connect!</h2>

      <div className="links-wrap">

      <a
              href="https://www.linkedin.com/in/kimberlyrodriguez95/"
              target="_blank"
              rel="noopener noreferrer"
        >
              
          <img className="link" src={ linkedin } alt="LinkedIn"/>
            
        </a>
      
     
      
        <a
              href="https://github.com/kim5981"
              target="_blank"
              rel="noopener noreferrer"
        >
              
          <img className="link" src={ github } alt="github"/>
            
        </a>
      
      </div>
       
      

      <p>Copyright { n.getFullYear() } All Rights Reserved</p>
    </footer>
        
      
    </div>
  );
}

export default App;
