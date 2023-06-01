import "./portfolio.css";
import "./projects/projects";
import { Projects } from "./projects/projects";

export const Portfolio = () => {
  return (
    <div className="portfolio my-5">
      <h1>Portfolio</h1>
      <div className="all-projects d-flex gap-3 col flex-wrap  justify-content-around">
        <Projects name="full stack" bgColor={"#333"} />
        <Projects name="nodejs" bgColor={"#888"} />
        <Projects name="react" bgColor={"#ccc"} />
        <Projects name="nodejs" bgColor={"#888"} />
        <Projects name="react" bgColor={"#ccc"} />
        <Projects name="full stack" bgColor={"#333"} />
      </div>
    </div>
  );
};
