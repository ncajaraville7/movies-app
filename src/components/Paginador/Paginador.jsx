import React from 'react';

import './Paginador.css';

const Paginador = ({ pages, setPages }) => {
  return (
    <div className="paginador">
      {pages >= 2 && <button onClick={()=> setPages(pages - 1)}>Anterior</button>}
      <p>{pages}</p>
      <button onClick={()=> setPages(pages + 1)}>Siguiente</button>
    </div>
  );
};

export default Paginador;
