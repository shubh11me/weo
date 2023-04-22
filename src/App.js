import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
function App() {
  return (
    <>
      <Router>
        <Header></Header>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
