import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Yoo from '../../../../assets/images/yoo.jpg';
import { motion } from 'framer-motion';

function Luna() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // GoBack button
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className='projectPage section'>
      <div>
        <div
          data-aos='fade-left'
          data-aos-duration='2500'
          className='flex backIcon'
          onClick={handleGoBack}
        >
          <TiArrowBackOutline size={30} className='icon' />
        </div>
      </div>
      <div className='container projectDiv'>
        <div className='titleDiv flex projectTitle'>
          <h2 data-aos='fade-right' data-aos-duration='2500'>
            Luna
          </h2>
        </div>
        <div />
        <div>
          <div className='imgContainer flex'>
            <img src={Yoo} alt='Project1' className='' />
          </div>
          <div>
            <h3>title</h3>
            <p>content</p>
            <div className='imgContainer flex'>
              <img src={Yoo} alt='Project1' className='' />
            </div>
            <h3>title</h3>
            <p>content</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Luna;
