import './App.scss';
import About from './components/About/About';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <Services/>
      <Skills/>
    </div>
  );
}

export default App;
