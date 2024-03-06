import React, { useEffect } from 'react';
import './Info.css';

// Imported icons
import { RxCalendar } from 'react-icons/rx';
import { BsBookmarkCheck, BsShieldCheck } from 'react-icons/bs';

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
            Title
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
            <div className='iconDiv flex'>
              <RxCalendar className='icon' />
            </div>
            <span className='cardTitle'>1</span>
            <p>1</p>
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='3500'
            className='singleCard grid'
          >
            <div className='iconDiv flex colorOne'>
              <BsShieldCheck className='icon' />
            </div>
            <span className='cardTitle'>2</span>
            <p>2</p>
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='4500'
            className='singleCard grid'
          >
            <div className='iconDiv flex colorTwo'>
              <BsBookmarkCheck className='icon' />
            </div>
            <span className='cardTitle'>3</span>
            <p>3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
