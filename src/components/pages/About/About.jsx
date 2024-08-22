import React, { useEffect } from 'react';
import './About.css';

// Import Images
import Img from '../../../assets/images/yoo.jpg';

// Import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  // AOS 애니메이션 지속시간 설정
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='about container section' id='detailAbout'>
      <div className='sectionContainer'>
        <div className='titlesDiv'>
          <small>About Me</small>
          <h2>유대현</h2>
          <p>1996. 01. 12</p>
        </div>

        <div className='infoDiv grid'>
          <div className='textDiv grid'>
            <div
              data-aos='fade-down'
              data-aos-duration='2500'
              className='singleInfo'
            >
              <span className='number'>01</span>
              <h4>Introduce</h4>
              <p>Contents</p>
            </div>
            <div
              data-aos='fade-down'
              data-aos-duration='3500'
              className='singleInfo'
            >
              <span className='number colorOne'>02</span>
              <h4>Activities</h4>
              <p>Contents</p>
            </div>
            <div
              data-aos='fade-down'
              data-aos-duration='4500'
              className='singleInfo'
            >
              <span className='number colorTwo'>03</span>
              <h4>Awards</h4>
              <p>Contents</p>
            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration='2500' className='imgDiv'>
            <img src={Img} alt='profile-img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
