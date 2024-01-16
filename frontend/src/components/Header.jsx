import React from "react";
import './header.css';

export const Header = () => {
  return (
    <div className="fondoHeader">
    <header>
      <div>
        <p className="trooking">Trooking</p>
      </div>
      <div>
        <button className="misReservas"> Mis Reservas </button>
      </div>
    </header>
    </div>
  );
};
