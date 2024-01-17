
import "./App.css";
import Reservas from "./components/Reservas/Reservas";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Catalogo } from "./components/Catalogo/Catalogo";
import { ReservationProvider } from "./components/MisReservas/ReservationContext";
import ConfirmacionReversa from "./components/MisReservas/MisReservas";

function App() {
  return (
    <Router>
      <ReservationProvider>
        <Routes>
          <Route path="/" element={<Catalogo />} />
          <Route path="/misreservas" element={<ConfirmacionReversa />} />
          <Route path="/reservas/:hotelId" element={<Reservas />} />
        </Routes>
      </ReservationProvider>
    </Router>
  );
}

export default App;
