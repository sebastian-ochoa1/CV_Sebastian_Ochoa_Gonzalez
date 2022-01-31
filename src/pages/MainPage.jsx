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
import Profile from 'components/Profile';
import H1withText from 'components/H1withText';

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
                <div className='w-cv-380 '>
                  <Languages />
                </div>
              </div>
            )}
          </div>
        </div>
      </Sidebar>

      <div className='flex flex-col lg:flex-row'>
        <div>
          <Profile />
        </div>

        <div>
          <div className=' mx-6 mb-7 md:mb-10 lg:mr-cv-60 lg:ml-0 lg:w-cv-400'>
            <H1withText tittle='Cursos' mg='h1-with-text'>
              <p>
                <p>
                  <li>Desarrollo en Groovy</li>
                  <hr className=' border-0' />
                  <li className='li-without-bullet'>
                    <span>(Udemy)</span>
                  </li>
                </p>
                <p className=' mt-cv-26'>
                  <li>Pruebas funcionales</li>
                  <hr className=' border-0' />
                  <li className='li-without-bullet'>
                    <span>(SP Academy)</span>
                  </li>
                </p>
                <p className=' mt-cv-26'>
                  <li>Automatización WEB</li>
                  <hr className=' border-0' />
                  <li className='li-without-bullet'>
                    <span>Screenplay (SP Academy)</span>
                  </li>
                </p>
                <p className=' mt-cv-26'>
                  <li>Fundamentos de Agilismo</li>
                  <hr className=' border-0' />
                  <li className='li-without-bullet'>
                    <span>(SP Academy)</span>
                  </li>
                </p>
              </p>
            </H1withText>
          </div>

          {isMobile && (
            <div
              className='bg-cv-color-gray-1 rounded-2xl flex-sidebar border-t border-t-cv-color-magenta-3
            sm:h-cv-540
            md:h-cv-250'
            >
              <div>
                <div className='w-cv-350'>
                  <GeneralInfo properties='h-cv-78 w-cv-334 text-center' />
                  <Line properties='w-cv-350 my-4' />
                  <div className=' ml-cv-22'>{isMobile && <Languages />}</div>
                </div>
              </div>
            </div>
          )}

          <div className=' lg:hidden'>
            <span>HERRAMIENTAS Y TECNOLOGÍAS</span>
          </div>

          <div className=' mb-14 mx-6 md:mb-10 lg:mr-cv-60 lg:ml-0 lg:w-cv-400 '>
            <H1withText tittle='Otras Cualidades' mg='h1-with-text lg:h-72'>
              <p>
                Aprendo rápidamente y me adapto con facilidad, me gusta aprender
                constantemente y soy bueno trabajando en equipo.
              </p>
            </H1withText>
          </div>

          <div className=' md:hidden'>
            <span>CONTACTAME</span>
          </div>
        </div>
      </div>

      {isTablet && (
        <div className='bg-cv-color-gray-1 rounded-2xl flex-sidebar h-cv-250 border-t border-t-cv-color-magenta-3'>
          <div className='w-cv-380 mt-6'>
            <Languages />
          </div>
        </div>
      )}

      {(isMobile || isTablet) && <Navbar />}

      {isDesktop && (
        <Footer>
          <div>
            <span>HERRAMIENTAS Y TECNOLOGÍAS</span>
          </div>
          <div>
            <span>CONTACTAME</span>
          </div>
        </Footer>
      )}
    </Background>
  );
};

export default MainPage;
