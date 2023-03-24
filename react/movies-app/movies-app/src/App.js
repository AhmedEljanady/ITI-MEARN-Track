import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Favorites from "./pages/favorite";
// import Pagination from "./components/pagination/pagination";
import MovieDetails from "./pages/movieDetailes";
import Movies from "./pages/movies";

function App() {
  return (
    <>
      <Header />
      {/* <Pagination /> */}
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/3/movie/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
