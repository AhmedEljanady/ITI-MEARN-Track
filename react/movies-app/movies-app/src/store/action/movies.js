import axiosInstance from "../../axiosConfig/instance";

export default function changeMovies() {
  return (dispatch) => {
    axiosInstance
      .get("3/movie/popular")
      .then((res) => {
        console.log(res.data.results);
        dispatch({ type: "SET_MOVIES", payload: res.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
