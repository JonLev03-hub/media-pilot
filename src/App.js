import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import About from "./pages/Landing/About";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route path="/" element={<About />} />
            <Route />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
