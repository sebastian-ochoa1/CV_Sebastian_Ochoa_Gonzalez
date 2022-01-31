import React from 'react';

const LinkedinIcon = ({ extraProperties }) => {
  return (
    <a
      href='https://www.linkedin.com/in/s38ag0/'
      target='_blank '
      rel='noreferrer'
    >
      <i className={`fab fa-linkedin text-icon-size ${extraProperties}`} />
    </a>
  );
};

const WhatsAppIcon = ({ extraProperties }) => {
  return (
    <a href='https://wa.me/+573217318737' target='_blank ' rel='noreferrer'>
      <i
        className={`fab fa-whatsapp-square text-icon-size ${extraProperties} `}
      />
    </a>
  );
};

const MailIcon = ({ extraProperties }) => {
  return (
    <a href='mailto:Sebast14n8a@gmail.com' target='_blank' rel='noreferrer'>
      <i
        className={`fas fa-envelope-square text-icon-size ${extraProperties} `}
      />
    </a>
  );
};

const GitHubIcon = ({ extraProperties }) => {
  return (
    <a
      href='https://github.com/sebastian-ochoa1?body=Hola, me contacto contigo porque en la empresa tenemos nuevas propuestas laborales y creemos que tu perfil es acorde a lo que estamos buscando.'
      target='_blank'
      rel='noreferrer'
    >
      <i
        className={`fab fa-github-square text-icon-size ${extraProperties} `}
      />
    </a>
  );
};

export { LinkedinIcon, WhatsAppIcon, MailIcon, GitHubIcon };
