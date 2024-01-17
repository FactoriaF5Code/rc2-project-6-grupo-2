import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="fondoHeader">
      <header>
        <div>
          <Link to="/" className="trooking">
            Trooking
          </Link>
        </div>
        <div>
          <button className="misReservas"> Mis Reservas </button>
        </div>
      </header>
    </div>
  );
};
