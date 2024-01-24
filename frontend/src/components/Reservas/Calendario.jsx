import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendario = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <>
      <p> Fecha de entrada</p>
      <DatePicker
        className="fecha"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <p> Fecha de salida</p>
      <DatePicker
        className="fecha"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
  );
};

Calendario.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired,
  setStartDate: PropTypes.func.isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  setEndDate: PropTypes.func.isRequired,
};

export default Calendario;
