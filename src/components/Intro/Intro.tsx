import "../Intro/Intro.scss";
import Typing from 'react-typing-animation';
export default function Intro() {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1>Welcome</h1>
   <Typing loop={true} speed={100}>
   <span>I am Jean Le Roux</span>
    <Typing.Backspace count={12} />
    <span>a Full Stack Developer</span>
    <Typing.Backspace count={22} />
    <span>a Cloud Guru</span>
    <Typing.Backspace count={18} />
  </Typing>

 
      </div>
    </div>
  );
}
