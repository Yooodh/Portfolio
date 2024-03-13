import React, { useEffect } from 'react';
import './Info.css';

// Imported icons
import { FaReact } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';

// Import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Info = () => {
  // UseEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='info section'>
      <div className='infoContainer container'>
        <div className='titleDiv flex'>
          <h2 data-aos='fade-right' data-aos-duration='2500'>
            Skills and Tools
          </h2>
          <button data-aos='fade-left' data-aos-duration='2500' className='btn'>
            View All
          </button>
        </div>

        <div className='cardsDiv grid'>
          <div
            data-aos='fade-up'
            data-aos-duration='2500'
            className='singleCard grid'
          >
            <div className='iconDiv flex colorThree'>
              <RiJavascriptFill className='icon' />
            </div>
            <span className='cardTitle'>JavaScript</span>
            <p>Language</p>
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='2500'
            className='singleCard grid'
          >
            <div className='iconDiv flex colorOne'>
              <FaHtml5 className='icon' />
            </div>
            <span className='cardTitle'>HTML5</span>
            <p>Frontend</p>
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='3500'
            className='singleCard grid'
          >
            <div className='iconDiv flex colorTwo'>
              <FaCss3Alt className='icon' />
            </div>
            <span className='cardTitle'>CSS3</span>
            <p>Frontend</p>
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='4500'
            className='singleCard grid'
          >
            <div className='iconDiv flex '>
              <FaReact className='icon' />
            </div>
            <span className='cardTitle'>React</span>
            <p>Frontend</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
