import { useReservation } from "./ReservationContext";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
import "./MisReservas.css";
import Corazon from "../Catalogo/Corazon";

function ConfirmacionReversa() {
  const { reservationInfo } = useReservation();

  return (
    <>
      <Header />
      <main className="contenedormisReservas">
        {reservationInfo && (
          <>
            <div className="reservation-message">
              <p>
                {`¡Enhorabuena! Has reservado el hotel "${reservationInfo.hotelName}" desde`}{" "}
                <b>{`${reservationInfo.startDate.toDateString()}`}</b> {`hasta`}{" "}
                <b>{`${reservationInfo.endDate.toDateString()}`}</b>
              </p>
            </div>
            <div>
              <section className="fichaReserva">
                <section>
                  <img
                    src={reservationInfo.photoUrl}
                    alt={reservationInfo.hotelName}
                    className="fotoFicha"
                  ></img>
                </section>
                <section className="fichaHotel">
                  <div className="descripcionFicha">
                    <p>{reservationInfo.hotelName}</p>
                    <Corazon />
                  </div>
                  <p className="masinfoFicha">{reservationInfo.description}</p>
                  <div className="derecha">
                  <button className="botonVerde"> Reservado</button>
                  </div>
                </section>
              </section>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default ConfirmacionReversa;
