import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Features from "./pages/Features";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
