import axiosInstance from "../../axiosConfig/instance";

// export default function changeMovies() {
//   return (dispatch) => {
//     axiosInstance
//       .get("customer")
//       .then((res) => {
//         console.log(res);
//         dispatch({ type: "SET_MOVIES", payload: res.data.results });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// }
export default function changeMovies() {
  return (dispatch) => {
    axiosInstance
      .post("customer", {
        firstName: "www",
        lastName: "ooo",
        email: "www@wwww.com",
        password: "1",
      })
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "SET_MOVIES", payload: res.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
