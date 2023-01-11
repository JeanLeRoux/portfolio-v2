import "./App.scss";
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import { Container, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Logo from "../src/assets/logo.png";

function App() {
  const [navBackground, setNavBackground] = useState(false)
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 100 });
    const handleScroll = () => {
      const show = window.scrollY > 50
      setNavBackground(show)
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, []);
  return (
    <div className="App">
      <Navbar expand="sm" fixed="top" variant="dark" style={{ transition: '1s ease',backgroundColor: navBackground ? '#334756' : 'transparent'}}>
        <Container>
          <Navbar.Brand className="nav-text">Jean Le Roux</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link className="nav-text">About</Nav.Link>
              <Nav.Link eventKey={2} className="nav-text">
                Services
              </Nav.Link>
              <Nav.Link eventKey={2} className="nav-text">
                Skills
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Intro />
      <About />
      <Services />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
