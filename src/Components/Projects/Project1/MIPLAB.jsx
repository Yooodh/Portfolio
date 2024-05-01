import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { TiArrowBackOutline } from 'react-icons/ti';

import Aos from 'aos';
import 'aos/dist/aos.css';

function MIPLAB() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='section'>
      <div className='container'>
        <div className='titleDiv flex'>
          <h2 data-aos='fade-right' data-aos-duration='2500'>
            MIP_LAB
          </h2>
          <Link to='/'>
            <div data-aos='fade-left' data-aos-duration='2500' className='flex'>
              <TiArrowBackOutline className='icon' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MIPLAB;
