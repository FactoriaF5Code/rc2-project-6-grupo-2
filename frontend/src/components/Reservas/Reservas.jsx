import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../../useFetch";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
import Calendario  from "./Calendario.jsx";
import { useReservation } from "../MisReservas/ReservationContext";
import "./Reservas.css";

function Reservas() {
  const { hotelId } = useParams();
  const { data } = useFetch(`http://localhost:8080/api/hotels/${hotelId}`);
  const { setReservation } = useReservation();
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  if (!data) {
    return <div>Cargando...</div>;
  }

  const { name, photoUrl, description } = data;

  const handleReserve = () => {
    setReservation({
      hotelName: name,
      startDate,
      endDate,
      photoUrl,
      description,
    });
    navigate(`/misreservas`);
  };

  return (
    <div>
      <Header />
      <div className="paginaReservas">
        <div className="containerReservas">
          <p className="completatuReserva"> Completa tu reserva</p>
          <p>{name}</p>
          <img src={photoUrl} alt={name} className="imagenReserva" />
          <div className="contenedorCalendario">
            <Calendario
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
          </div>
          <div className="hacerReserva">
            <button className="botonConfirmar" onClick={handleReserve}>
              Reservar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Reservas;
