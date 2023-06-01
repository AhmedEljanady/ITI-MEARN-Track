export const Footer = () => {
  return (
    <div className="footer d-flex my-5">
      <div className="col-4">
        <h4 className="mb-2">get in touch</h4>
        <p>
          <i class="bi bi-envelope"></i>ahmed.janady13@gmail.com
        </p>
        <p>
          <i class="bi bi-phone"></i>01095904579
        </p>
      </div>
      <div className="col-4">
        <button
          type="button"
          class="btn btn-outline-dark"
          style={{ textAlign: "center" }}
        >
          contact me
        </button>
      </div>
      <div className="col-4">
        <div className="d-flex gap-3" style={{ marginLeft: 41 + "%" }}>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-linkedin"></i>
        </div>
        <p>copywrites</p>
      </div>
    </div>
  );
};
