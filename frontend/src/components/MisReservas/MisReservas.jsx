import { useReservation } from "./ReservationContext";

function ConfirmacionReversa() {
    const { reservationInfo } = useReservation();
  return (
    <div>
      {reservationInfo && (
        <div className="reservation-message">
          <p>{`¡Enhorabuena! Has reservado el hotel "${reservationInfo.hotelName}" por ${reservationInfo.price} €`}</p>
        </div>
      )}
    </div>
  );
}

export default ConfirmacionReversa;
