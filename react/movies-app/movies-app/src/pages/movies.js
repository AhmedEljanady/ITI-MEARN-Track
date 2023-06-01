//

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosConfig/instance";
import { addFavorirts, removeFavorirts } from "../store/action/action";
import changeMovies from "../store/action/movies";

// import Pagination from "../components/pagination/pagination";
//TODO: pagination not works
const Movies = () => {
  const [page, setPage] = useState(1);
  const favorites = useSelector((state) => state.favorites.fav);
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    axiosInstance
      .get(`customer`)
      .then((res) => {
        setPage(res.data.page);
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(changeMovies());
  }, [page]);

  function handleAddFav(el) {
    dispatch(addFavorirts(el));
  }
  const handleRemoveFav = (el) => {
    dispatch(removeFavorirts(el));
  };

  function handleFav(el) {
    if (
      favorites.find((item) => {
        return item.id === el.id;
      })
    ) {
      handleRemoveFav(el.id);
    } else {
      handleAddFav(el);
    }
  }

  return (
    <div>
      {/*  */}
      <div>
        <div className="pagination d-flex justify-content-center">
          <button
            aria-label="Previous"
            onClick={() => {
              if (page === 1) {
                return;
              }
              setPage((page) => --page);
              console.log(page);
            }}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
          <button
            onClick={() => {
              setPage(1);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              setPage(2);
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              setPage(3);
            }}
          >
            3
          </button>
          <button
            aria-label="Next"
            onClick={() => {
              if (page === 50) {
                return;
              }
              setPage(page + 1);
              console.log(page);
            }}
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </div>
      </div>
      {/*  */}
      <div className="d-flex gap-4 flex-wrap">
        {movies.map((el) => {
          let img = `https://image.tmdb.org/t/p/w500/${el.poster_path}`;
          return (
            <div key={el.id}>
              <div
                className="card position-relative"
                style={{ width: "18rem" }}
              >
                <div>
                  <i
                    class="bi bi-heart-fill position-absolute"
                    style={{
                      top: "15px",
                      right: "25px",
                      cursor: "pointer",
                      color: favorites.find((item) => {
                        return item.id === el.id;
                      })
                        ? "red"
                        : "",
                    }}
                    onClick={() => {
                      handleFav(el);
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
    </div>
  );
};
export default Movies;
