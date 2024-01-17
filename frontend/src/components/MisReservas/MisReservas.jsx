import { useReservation } from "./ReservationContext";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
import './MisReservas.css'


function ConfirmacionReversa() {
  const { reservationInfo } = useReservation();
  return (
    <>
      <Header />
      <main className="contenedormisReservas">
        {reservationInfo && (
          <div className="reservation-message">
            <p>{`¡Enhorabuena! Has reservado el hotel "${reservationInfo.hotelName}" por ${reservationInfo.price} €`}</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default ConfirmacionReversa;
