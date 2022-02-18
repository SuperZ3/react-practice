import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import { MyContext } from "./context";
import { useContext } from "react";

function App() {
  const { a, b } = useContext(MyContext)
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
      <ul>
        <li>{a}</li>
        <li>{b}</li>
      </ul>
    </>
  );
}

export default App;
