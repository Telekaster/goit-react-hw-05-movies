import HomeView from "./views/HomeView";
import MoovieView from "./views/MoovieView";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomeView />} />
        <Route path="/moovies/:id" element={<MoovieView />} />
      </Routes>
    </>
  );
}

export default App;
