import React, { useEffect } from 'react';
import './Support.css';

// Imported Images
import Img from '../../imgs/yoo.jpg';

// Import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Support = () => {
  // UseEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='support container section'>
      <div className='sectionContainer'>
        <div className='titlesDiv'>
          <small>Title 1</small>
          <h2>Title 2</h2>
          <p>Contents</p>
        </div>

        <div className='infoDiv grid'>
          <div className='textDiv grid'>
            <div
              data-aos='fade-down'
              data-aos-duration='2500'
              className='singleInfo'
            >
              <span className='number'>01</span>
              <h4>Title</h4>
              <p>Contents</p>
            </div>
            <div
              data-aos='fade-down'
              data-aos-duration='3500'
              className='singleInfo'
            >
              <span className='number colorOne'>02</span>
              <h4>Title</h4>
              <p>Contents</p>
            </div>
            <div
              data-aos='fade-down'
              data-aos-duration='4500'
              className='singleInfo'
            >
              <span className='number colorTwo'>03</span>
              <h4>Title</h4>
              <p>Contents</p>
            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration='2500' className='imgDiv'>
            <img src={Img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
