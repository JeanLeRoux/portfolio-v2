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
      {skillsData.map((skill) => (
        <div className="skill-content">
          <span className={"skill-heading"}>{skill.name}</span>
          <ProgressBar bgcolor={"#082032"} completed={skill.rating} />
        </div>
      ))}
    </div>
  );
};

export default Skills;
