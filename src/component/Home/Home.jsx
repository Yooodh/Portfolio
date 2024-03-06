import React, { useEffect } from 'react';
import './Home.css';

// Import Typical
import Typical from 'react-typical';

// Import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  // UseEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='home flex container'>
      <div className='mainText'>
        <h1 data-aos='fade-up' data-aos-duration='2500'>
          Hi, I'm Yoo!
        </h1>
      </div>

      <div
        data-aos='fade-down'
        data-aos-duration='2500'
        className='homeImages flex'
      >
        <div>
          <img src='../imgs/yoo.JPG' className='yoo-img'></img>
          <p>
            <Typical
              loop={Infinity}
              wrapper='b'
              steps={[
                '안녕하세요.',
                1500,
                '프론트엔드 개발자',
                1500,
                '유대현 입니다.',
                1500,
              ]}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
