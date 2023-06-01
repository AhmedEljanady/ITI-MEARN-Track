import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import { LangProvieder } from "./context/langueges";
import Favorites from "./pages/favorite";
// import Pagination from "./components/pagination/pagination";
import MovieDetails from "./pages/movieDetailes";
import Movies from "./pages/movies";

function App() {
  const [lang, setLang] = useState("ar");
  return (
    <>
      <LangProvieder value={{ lang, setLang }}>
        <Header />
      </LangProvieder>
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
