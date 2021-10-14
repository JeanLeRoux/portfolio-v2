import './App.scss';
import About from './components/About/About';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      {/* <Intro/> */}
      <About/>
      <Services/>
    </div>
  );
}

export default App;
