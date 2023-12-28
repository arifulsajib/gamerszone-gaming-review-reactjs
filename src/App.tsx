import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Common/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import CreatorsPage from "./Pages/CreatorsPage/CreatorsPage";
import StoresPage from "./Pages/StoresPage/StoresPage";
import GamesPage from "./Pages/GamesPage/GamesPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Footer from "./Components/Common/Footer/Footer";
import GameInfo from "./Components/Common/GameInfo/GameInfo";
import StoreDetails from "./Components/Common/StoreDetails/StoreDetails";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <ScrollToTop smooth top={500} />
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/home" element={<HomePage></HomePage>}></Route>
          <Route path="/creators" element={<CreatorsPage></CreatorsPage>}></Route>
          <Route path="/stores" element={<StoresPage></StoresPage>}></Route>
          <Route path="/games" element={<GamesPage></GamesPage>}></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
          <Route path="/games/:id" element={<GameInfo></GameInfo>}></Route>
          <Route path="/stores/:id" element={<StoreDetails></StoreDetails>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
