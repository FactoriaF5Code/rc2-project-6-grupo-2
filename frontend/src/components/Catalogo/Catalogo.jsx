import { useFetch } from "../../useFetch";
import "./Catalogo.css";
import {Link} from 'react-router-dom';

export const Catalogo = () => {
  const { data } = useFetch("http://localhost:8080/api/hotels");
  return (
    <div className="fondoBody">
      {data?.map((hotel) => (
        <section key={hotel.id} className="container">
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
              <img src="../../../public/heart.svg"></img>
            </div>
            <p className="masInfo">{hotel.description}</p>
            <section className="precio">
              <p><b>{hotel.pricePerNight}</b></p>
              <p>1 noche, 2 adultos</p>
              <Link to="/reservas" className="Reservar">Reservar</Link>
            </section>
          </section>
        </section>
      ))}
    </div>
  );
};
