import { createContext, useContext, useState } from 'react';

const ReservationContext = createContext();

export const useReservation = () => {
  return useContext(ReservationContext);
};

// eslint-disable-next-line react/prop-types
export const ReservationProvider = ({ children }) => {
  const [reservationInfo, setReservationInfo] = useState(null);

  const setReservation = (data) => {
    setReservationInfo(data);
  };

  const values = {
    reservationInfo,
    setReservation,
  };

  return (
    <ReservationContext.Provider value={values}>
      {children}
    </ReservationContext.Provider>
  );
};
