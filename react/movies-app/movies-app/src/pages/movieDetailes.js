// import

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../axiosConfig/instance";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axiosInstance
      .get(`3/movie/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const img = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <img src={img} alt="..." />
    </div>
  );
};

export default MovieDetails;
