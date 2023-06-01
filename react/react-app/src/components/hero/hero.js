import "./hero.css";
export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-det d-flex flex-column gap-2 justify-content-center h-100">
        <h1>Ahmed Khaled</h1>
        <h3>Back-end Developer</h3>
        <div className="contact">
          <button type="button" class="btn btn-dark">
            Contact Me
          </button>
          {/* <a href="#">Download cv</a> */}
        </div>
      </div>
    </div>
  );
};
