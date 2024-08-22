import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCloseCircleOutline } from 'react-icons/io5';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './MIPLAB.css';

import DGNMain from '../../../../assets/images/DigitalGameNomad_Main.jpeg';

function MIPLAB() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // GoBack button
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className='project1 section'>
      <div>
        <div
          data-aos='fade-left'
          data-aos-duration='2500'
          className='flex backIcon'
          onClick={handleGoBack}
        >
          <IoCloseCircleOutline size={30} className='icon' />
          <h3>&nbsp;CLOSE</h3>
        </div>
      </div>

      <div className='container projectDiv'>
        <div className='titleDiv flex projectTitle'>
          <h1 data-aos='fade-right' data-aos-duration='2500'>
            MIP_LAB
          </h1>
        </div>
        <div />

        {/* page start */}
        <div className='section'>
          <h3>Main page</h3>
          <div className='imgContainer flex'>
            <img src={DGNMain} alt='Project1' className='' />
          </div>
        </div>
        {/* page end */}

        <div className='section'>
          <h3>Purpose</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae et
            dolorem soluta? Corrupti, ut harum! Neque sequi, beatae, odit autem,
            incidunt quos ab quo mollitia ipsa voluptatum dicta optio!
            Necessitatibus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MIPLAB;
