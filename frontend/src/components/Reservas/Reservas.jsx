import { useParams } from "react-router-dom";
import { useFetch } from "../../useFetch";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";

function Reservas() {
  const { hotelId } = useParams();
  const { data } = useFetch(`http://localhost:8080/api/hotels/${hotelId}`);

  if (!data) {
    return <div>Cargando...</div>;
  }
  const { name, description, photoUrl, pricePerNight } = data;

  return (
    <div>
      <Header />
      <h2>Reservas para el hotel {name}</h2>
      <p>{description}</p>
      <img src={photoUrl} alt="" />
      <p>Precio por noche: {pricePerNight} €</p>
      <Footer />
    </div>
  );
}

export default Reservas;
