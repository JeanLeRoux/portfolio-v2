import ProgressBar from "./progress-bar.component";
import "../Skills/Skills.scss";

const Skills = () => {
  const skillsData = [
    {
      name: "HTML",
      rating: 94,
    },
    {
        name: "CSS",
        rating: 75,
      },
      {
        name: "JavaScript",
        rating: 80,
      },
      {
        name: "Python",
        rating: 90,
      },
      {
        name: "Java",
        rating: 60,
      },
      {
        name: "React",
        rating: 70,
      },
      {
        name: "Angular",
        rating: 40,
      },
      {
        name: "Go",
        rating: 40,
      },
      {
        name: "AWS",
        rating: 78,
      },
  ];
  return (
    <div className="skills-container">
      <h1 className="heading">
            &lt;<span className="code-tag">H1</span>&gt; SKILLS &lt;/
            <span className="code-tag">H1</span>&gt;
          </h1>
      {skillsData.map((skill) => (
        <div className="skill-content" data-aos="fade">
          <span className={"skill-heading"}>{skill.name}</span>
          <ProgressBar bgcolor={"#082032"} completed={skill.rating} />
        </div>
      ))}
    </div>
  );
};

export default Skills;
