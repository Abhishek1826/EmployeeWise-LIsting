import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";
import EmployeeListing from "./dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Home />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<EmployeeListing />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
