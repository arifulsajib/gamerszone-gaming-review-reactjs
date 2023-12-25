import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Common/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import CreatorsPage from "./Pages/CreatorsPage/CreatorsPage";
import StoresPage from "./Pages/StoresPage/StoresPage";
import GamesPage from "./Pages/GamesPage/GamesPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/creators" element={<CreatorsPage></CreatorsPage>}></Route>
          <Route path="/stores" element={<StoresPage></StoresPage>}></Route>
          <Route path="/games" element={<GamesPage></GamesPage>}></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
