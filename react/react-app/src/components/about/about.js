import "./about.css";

export const About = () => {
  return (
    <div className="about d-flex my-5">
      <div className="ab-title col-3 d-flex justify-content-center ">
        <h2> About Me</h2>
      </div>
      <div className="ab-det d-flex flex-column gap-4 col-9">
        <p>
          Quickly manage the layout, alignment, and sizing of grid columns,
          navigation, components, and more with a full suite of responsive
          flexbox utilities. For more complex implementations, custom CSS may be
          Quickly manage the layout, alignment, and sizing of grid columns,
          navigation, components, and more with a full suite of responsive
          flexbox utilities. For more complex implementations, custom CSS may be
          necessary.
        </p>
        <div>
          <button type="button" class="btn btn-dark ">
            Download My CV
          </button>
        </div>
      </div>
    </div>
  );
};
