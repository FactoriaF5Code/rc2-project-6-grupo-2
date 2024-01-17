import { useParams } from "react-router-dom";
import { useFetch } from "../../useFetch";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
import { Calendario } from "./Calendario";

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
      <div>
        <p className="completatuReserva"> Completa tu reserva</p>
        <h2>{name}</h2>
        <img src={photoUrl} alt={name} />
        <p>Precio por noche: {pricePerNight} €</p>
        <Calendario />
        
      </div>
      <Footer />
    </div>
  );
}

export default Reservas;
