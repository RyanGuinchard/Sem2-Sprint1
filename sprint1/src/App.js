import "./App.css";
import HomePage from "./components/HomePage";
import SnakeGame from "./components/SnakeGame";
import CostumeContest from "./components/CostumeContest";
import ContactUs from "./components/ContactUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/snakeGame" element={<SnakeGame />} />
          <Route path="/costumeContest" element={<CostumeContest />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
