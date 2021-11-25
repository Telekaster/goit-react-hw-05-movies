import HomeView from "./views/HomeView";
import SearchView from "./views/SearchView";
import MoovieView from "./views/MoovieView";
import CastView from "./views/CastView";
import ReviewsView from "./views/ReviewsView";
import { Routes, Route } from "react-router-dom";
import Redirect from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomeView />} />
        <Route path="/search_movie" element={<SearchView />} />
        <Route path="/moovies/:id" element={<MoovieView />} />
        <Route path="/moovies/:id/cast" element={<CastView />} />
        <Route path="/moovies/:id/reviews" element={<ReviewsView />} />
      </Routes>
    </>
  );
}

export default App;
