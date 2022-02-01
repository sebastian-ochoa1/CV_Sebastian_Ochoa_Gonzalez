import React from 'react';
import {
  LinkedinIcon,
  WhatsAppIcon,
  MailIcon,
  GitHubIcon,
} from 'components/SocialIcons';

const Navbar = () => {
  return (
    <nav className='bg-cv-color-gray-2 fixed bottom-0 inset-x-0 h-cv-60 border-t border-cv-color-cian-1 z-50'>
      <div className='flex flex-row justify-between'>
        <div />
        <LinkedinIcon extraProperties='nav-icon' />
        <WhatsAppIcon extraProperties='nav-icon' />
        <MailIcon extraProperties='nav-icon' />
        <GitHubIcon extraProperties='nav-icon' />
        <div />
      </div>
    </nav>
  );
};

export default Navbar;
