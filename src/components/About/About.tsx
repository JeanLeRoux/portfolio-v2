import PersonalImage from "../../assets/personal.jpg";
import "../About/About.scss";
export default function About() {
  return (
    <div className="about-container">
        <img src={PersonalImage} alt="personal" className="personal-image" />
      <div className="description-container">
        <div className="description-content">
          <h1 className="text">
            &lt;<span className="code-tag">H1</span>&gt; ABOUT &lt;/
            <span className="code-tag">H1</span>&gt;
          </h1>
          <p className="text">
            &lt;<span className="code-tag">P</span>&gt;<br/>
            I am willing to learn and
            can adapt to any situation. My greatest personal trait is that I
            love solving problems and I persevere until I solve them. I can work
            on my own and also in a team. My main objective in life is that my
            work will benefit the company I work for, myself, and the people
            around me. I enjoy staying on top of market trends such as new
            technologies and trending programming languages. As a result, I
            ensure to update my knowledge to have at least a basic understanding
            of how it works. 
            <br/>&lt;/<span className="code-tag">P</span>&gt;
          </p>
        </div>
      </div>
    </div>
  );
}
