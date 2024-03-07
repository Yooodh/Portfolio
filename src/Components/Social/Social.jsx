import React, { useEffect } from 'react';
import './Social.css';

// Import Images
import bg1 from '../../imgs/yoo.jpg';
import bg2 from '../../imgs/yoo.jpg';
import bg3 from '../../imgs/yoo.jpg';
import bg4 from '../../imgs/yoo.jpg';

// Import social Images
import icon1 from '../../imgs/yoo.jpg';
import icon2 from '../../imgs/yoo.jpg';
import icon3 from '../../imgs/yoo.jpg';
import icon4 from '../../imgs/yoo.jpg';

// Import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const socials = [
  {
    id: 1,
    backgroundImage: bg1,
    socialImage: icon1,
    socialName: '1',
    socialLink: '@1',
  },
  {
    id: 2,
    backgroundImage: bg2,
    socialImage: icon2,
    socialName: '2',
    socialLink: '@2',
  },
  {
    id: 3,
    backgroundImage: bg3,
    socialImage: icon3,
    socialName: '3',
    socialLink: '@3',
  },
  {
    id: 4,
    backgroundImage: bg4,
    socialImage: icon4,
    socialName: '4',
    socialLink: '@4',
  },
];

const Social = () => {
  // UseEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='socials container section'>
      <div className='sectionContainer'>
        <h2 data-aos='fade-down' data-aos-duration='2500'>
          Social
        </h2>

        <div className='socialsContainer grid'>
          {socials.map(
            ({ id, backgroundImage, socialImage, socialName, socialLink }) => {
              return (
                /* single passanger card */
                <div
                  data-aos='fade-up'
                  data-aos-duration='2500'
                  key={id}
                  className='singlesocial'
                >
                  <img src={backgroundImage} className='backgroundImage' />
                  <div className='socialDetails'>
                    <div className='socialPicture'>
                      <img src={socialImage} className='socialImage' />
                    </div>
                    <div className='socialName'>
                      <span>{socialName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Social;
