import React from 'react';
import H1withText from 'components/H1withText';

const Profile = () => {
  return (
    <div className='mx-6'>
      <H1withText tittle='Perfil' mg='h1-with-text'>
        <p>
          Estudiante de últimos semestres de ingeniería de sistemas y
          automatizador de pruebas Jr. Apasionado por todo lo que rodea la labor
          del desarrollo de software, desde la arquitectura hasta las pruebas y
          con la meta de ser un gran ingeniero Full-Stack. Actualmente con
          experiencia en Java y Selenium con Serenity BDD y laburando en el
          sector de pruebas.
        </p>
      </H1withText>

      <H1withText tittle='Academia' mg='h1-with-text'>
        <p>
          <p>
            Colegio Empresarial
            <hr className=' border-0' />
            Bachiller técnico en informática
            <hr className=' border-0' />
            2016
          </p>

          <p className=' mt-cv-26'>
            Universidad de Antioquia
            <hr className=' border-0' />
            Ingeniería de sistemas
            <hr className=' border-0' />
            (2017 - Actualidad)
          </p>
        </p>
      </H1withText>

      <H1withText tittle='Laboral' mg='h1-with-text'>
        <p>
          Sophos Solutions
          <hr className=' border-0' />
          Tiempo completo
          <hr className=' border-0' />
          Analista QA - Automatizador WEB Jr.
          <hr className=' border-0' />
          (Mayo 2021 - Actualidad)
        </p>
      </H1withText>
    </div>
  );
};

export default Profile;
