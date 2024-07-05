import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import './BeCleverROI.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Yoo from '../../../../assets/images/yoo.jpg';
import { motion } from 'framer-motion';
import Navbar from '../../Navbar/Navbar';

function BeCleverROI() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // GoBack button
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='projectPage section'
    >
      <div>
        <div
          data-aos='fade-left'
          data-aos-duration='2500'
          className='flex backIcon'
        >
          <TiArrowBackOutline
            size={30}
            className='icon flex'
            onClick={handleGoBack}
          />
        </div>
      </div>

      <div className='container projectDiv'>
        <div className='titleDiv flex projectTitle'>
          <h2 data-aos='fade-down' data-aos-duration='2500'>
            BeClever_ROI
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
    </motion.div>
  );
}

export default BeCleverROI;
