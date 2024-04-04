import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// CSS and Styling imports
import "./App.css";

// Page imports
import Home from "./pages/Home";

// Component imports
import Header from "./components/GlobalComponents/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
