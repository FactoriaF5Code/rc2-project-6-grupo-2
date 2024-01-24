import { useState } from "react";

const Corazon = () => {
  const [clicado, setClicado] = useState(false);

  const handleClic = () => {
    setClicado(!clicado);
  };

  const estiloCorazon = {
    color: clicado ? '#cc0000' : '#003B95',
    cursor: 'pointer',
  };

  return (
    <span style={estiloCorazon} onClick={handleClic} className="corazon">
      &#10084;
    </span>
  );
};

export default Corazon;
