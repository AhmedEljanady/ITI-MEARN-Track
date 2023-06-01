import "./skills.css";
import { Progress } from "./progress/progress";
export const Skills = () => {
  return (
    <div className="skills my-5">
      <h1>Skills</h1>
      <p>
        Documentation and examples for using Bootstrap custom progress bars
        featuring support for stacked bars, animated backgrounds, and text
        labels.Documentation and examples for using Bootstrap custom progress
        bars featuring support for stacked bars, animated backgrounds, and text
        labels.
      </p>
      <div className="skill-det d-flex gap-5 justify-content-center">
        <div className="myFocus col-2">
          <ul>
            <li>My Focus</li>
            <hr></hr>
            <li>back-end</li>
            <li>Node.Js</li>
            <li>Front-end</li>
            <li>React.Js</li>
          </ul>
        </div>
        <div className="progresss col-5 ">
          <Progress skillName="HTML" prog="95" />
          <Progress skillName="CSS" prog="85" />
          <Progress skillName="JS" prog="90" />
          <Progress skillName="React" prog="78" />
          <Progress skillName="Node" prog="95" />
        </div>
      </div>
    </div>
  );
};
