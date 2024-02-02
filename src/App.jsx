import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ParticlesBg from "./components/ParticlesBg/ParticlesBg";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Bonuses from "./pages/Bonuses/Bonuses";
import HowToRegister from "./pages/HowToRegister/HowToRegister";
import RewardPage from "./pages/Leaderboard/RewardPage";
import VideoPage from "./pages/Leaderboard/VideoPage";

function App() {
  return (
    <>
      <ParticlesBg />
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/bonuses" Component={Bonuses} />
          <Route path="/leaderboard" Component={Leaderboard} />
          <Route path="/how-to-register" Component={HowToRegister} />
          <Route path="/rewards" Component={RewardPage} />
          <Route path="/videos" Component={VideoPage} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
