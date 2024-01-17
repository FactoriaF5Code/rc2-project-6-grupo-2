import { useParams, Link } from "react-router-dom";
import { useFetch } from "../../useFetch";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
import { Calendario } from "./Calendario";
import "./Reservas.css";

function Reservas() {
  const { hotelId } = useParams();
  const { data } = useFetch(`http://localhost:8080/api/hotels/${hotelId}`);

  if (!data) {
    return <div>Cargando...</div>;
  }
  const { name, photoUrl, pricePerNight } = data;

  return (
    <div>
      <Header />
      <div className="paginaReservas">
        <div className="containerReservas">
          <p className="completatuReserva"> Completa tu reserva</p>
          <p>{name}</p>
          <img src={photoUrl} alt={name} className="imagenReserva" />
          <div className="contenedorCalendario">
            <Calendario />
          </div>
          <div className="hacerReserva">
            <p>
              <b> {pricePerNight} € </b>
            </p>
            <Link to="/">
              <button className="botonConfirmar"> Reservar</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Reservas;
