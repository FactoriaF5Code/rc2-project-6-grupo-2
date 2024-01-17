import { useParams } from 'react-router-dom';

function Reservas() {
  const { hotelId } = useParams();

  // Lógica para obtener la información del hotel con el hotelId y mostrarla en la página de reservas

  return (
    <div>
      <h2>Reservas para el hotel con ID {hotelId}</h2>
      {/* Mostrar información del hotel */}
    </div>
  );
}

export default Reservas;
