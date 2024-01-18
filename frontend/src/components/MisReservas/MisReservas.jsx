import { useReservation } from "./ReservationContext";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
import "./MisReservas.css";

function ConfirmacionReversa() {
  const { reservationInfo } = useReservation();

  return (
    <>
      <Header />
      <main className="contenedormisReservas">
        {reservationInfo && (
          <div className="reservation-message">
            <p>
              {`¡Enhorabuena! Has reservado el hotel "${reservationInfo.hotelName}" desde`}{" "}
              <b>{`${reservationInfo.startDate.toDateString()}`}</b> {`hasta`}{" "}
              <b>{`${reservationInfo.endDate.toDateString()}`}</b>
            </p>
            <img src={reservationInfo.photoUrl} alt={reservationInfo.hotelName} />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default ConfirmacionReversa;
