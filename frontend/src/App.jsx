import "./App.css";
import Reservas from './components/Reservas/Reservas';
import { Homepage } from './components/Homepage/Homepage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/reservar" element={<Reservas/>} />
      </Routes>
    </Router>
  );
}

export default App;
