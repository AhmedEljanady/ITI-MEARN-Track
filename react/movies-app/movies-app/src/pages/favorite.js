import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavorirts } from "../store/action/action";
function Favorites() {
  let favorites = useSelector((state) => state.favorites.fav);
  const dispatch = useDispatch();

  const handleRemoveFav = (el) => {
    dispatch(removeFavorirts(el));
  };

  return (
    <div className="d-flex gap-4 flex-wrap">
      {favorites.map((el) => {
        let img = `https://image.tmdb.org/t/p/w500/${el.poster_path}`;
        return (
          <div key={el.id}>
            <div className="card position-relative" style={{ width: "18rem" }}>
              <div>
                <i
                  class="bi bi-trash position-absolute"
                  style={{ top: "15px", right: "25px", cursor: "pointer" }}
                  onClick={() => {
                    handleRemoveFav(el.id);
                  }}
                ></i>
              </div>
              <img src={img} className="card-img-top" alt="..." />
              <div className="card-body">
                <Link to={`/3/movie/${el.id}`}>
                  <h5 class="card-title">{el.title}</h5>
                </Link>
                <p className="card-text">{el.overview}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Favorites;
