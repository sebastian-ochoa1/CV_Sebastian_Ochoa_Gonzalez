import { React, useState, useEffect } from 'react';
import useWindowSize from 'hooks/useWindowSize';
import Background from 'layouts/Background';
import Sidebar from 'components/Sidebar';
import GeneralInfo from 'components/GeneralInfo';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Languages from 'components/Languages';
import NameAndPhoto from 'components/NameAndPhoto';
import Line from 'components/Line';

const MainPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width < 600) {
      setIsMobile(true);
      setIsTablet(false);
      setIsDesktop(false);
    } else if (size.width >= 600 && size.width < 1920) {
      setIsMobile(false);
      setIsTablet(true);
      setIsDesktop(false);
    } else if (size.width >= 1920) {
      setIsMobile(false);
      setIsTablet(false);
      setIsDesktop(true);
    }
  }, [size]);

  return (
    <Background>
      <Sidebar>
        <div>
          <NameAndPhoto />
        </div>
        <div className='w-full'>
          {!isMobile && (
            <div className='flex flex-col items-center'>
              <Line properties='mb-5 lg:mb-3 mt-cv-1 lg:mt-cv-22' />
              <div className=' w-cv-380'>
                <GeneralInfo properties='h-10' />
              </div>
            </div>
          )}

          <div className='w-full'>
            {isDesktop && (
              <div className='flex flex-col items-center'>
                <Line properties='my-3' />
                <div className='w-cv-380'>
                  <Languages />
                </div>
              </div>
            )}
          </div>
        </div>
      </Sidebar>

      <div>
        <div>
          <span>PERFIL, ACADEMIA, LABORAL, CURSOS</span>
        </div>

        {isMobile && (
          <div
            className='bg-cv-color-gray-1 rounded-2xl flex-sidebar 
          sm:h-cv-540
          md:h-cv-250'
          >
            {isMobile && (
              <div>
                <div className='w-cv-380'>
                  <GeneralInfo properties='h-cv-78 w-cv-334 text-center' />
                </div>
                <Line properties='my-4' />
                {isMobile && <Languages />}
              </div>
            )}
          </div>
        )}

        <div>
          <span>HERRAMIENTAS Y TECNOLOGÍAS</span>
        </div>

        <div>
          <span>OTRAS CUALIDADES</span>
        </div>

        <div>
          <span>CONTACTAME</span>
        </div>
      </div>

      {isTablet && (
        <div className='bg-cv-color-gray-1 rounded-2xl flex-sidebar h-cv-250'>
          <div className='w-cv-380 mt-6'>
            <Languages />
          </div>
        </div>
      )}
      {(isMobile || isTablet) && <Navbar />}
      {isDesktop && <Footer />}
    </Background>
  );
};

export default MainPage;
