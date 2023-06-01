import "./progress.css";
export const Progress = ({ prog, skillName }) => {
  return (
    <div className="d-flex my-2">
      <div
        className="col-1 d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: "darkgreen",
          height: 40 + "px",
          width: 60 + "px",
        }}
      >
        {skillName}
      </div>
      <div
        className="progress d-block col"
        style={{ height: 40 + "px", borderRadius: 0 }}
      >
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: prog + "%", height: 40 + "px" }}
          aria-valuenow={prog}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};
