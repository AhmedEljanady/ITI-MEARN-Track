export const Projects = ({ name, bgColor }) => {
  return (
    <div
      className="project col-3 d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: bgColor,
        height: 200 + "px",
      }}
    >
      <h3>{name}</h3>
    </div>
  );
};
