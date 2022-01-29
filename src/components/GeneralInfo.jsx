import React from 'react';
import H2withText from 'components/H2withText';

const GeneralInfo = ({ properties }) => {
  return (
    <div>
      <h1 className={`h1-magenta-3 ${properties}`}>Información general</h1>
      <div>
        <H2withText
          mg='ml-5 mt-cv-18'
          tittle='Ubicación'
          text='Area metropolitana de Medellín, Antioquia, Colombia'
        />
        <H2withText
          mg='ml-5 mt-cv-38'
          tittle='Correo:'
          text='Sebast14n8a@gmail.com'
        />
        <H2withText mg='ml-5 mt-4' tittle='Teléfono:' text='+57 321 7318737' />
      </div>
    </div>
  );
};

export default GeneralInfo;
