import Corazon from "./Corazon";
import { useFetch } from "../../useFetch";
import "./Catalogo.css";
import { Link } from "react-router-dom";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";

export const Catalogo = () => {
  const { data } = useFetch("http://localhost:8080/api/hotels");

  return (
    <>
      <Header />
      <div className="fondoBody">
        {data?.map((hotel) => (
          <div key={hotel.id}>
            <section className="container">
              <section>
                <img
                  src={hotel.photoUrl}
                  alt={hotel.name}
                  className="fotoHotel"
                ></img>
              </section>
              <section className="hotel">
                <div className="descripcionHotel">
                  <p>{hotel.name}</p>
                  <Corazon />
                </div>
                <p className="masInfo">{hotel.description}</p>
                <section className="precio">
                  <p>
                    <b>{hotel.pricePerNight} €</b>
                  </p>
                  <p>1 noche, 2 adultos</p>
                  <Link to={`/reservas/${hotel.id}`} className="hotel-link">
                    <p className="Reservar">Reservar</p>
                  </Link>
                </section>
              </section>
            </section>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};
