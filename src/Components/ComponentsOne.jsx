import React from 'react';
import testimonio from './testimonioDesing.module.scss';

function ComponentsOne(props) {
  return (
    <div className={testimonio.contenedor_testimonio}>
      <img
        className={testimonio.imagen_testimonio}
        src={props.imagen}
        alt='Foto de Emma'/>
      <div className={testimonio.contenedor_texto_testimonio}>
        <p className={testimonio.nombre_testimonio}><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className={testimonio.cargo_testimonio}>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className={testimonio.texto_testimonio}>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default ComponentsOne;