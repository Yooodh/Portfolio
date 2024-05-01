import React, { useEffect } from 'react';
import './Home.css';

// Import Typewriter
import Typewriter from 'typewriter-effect';

// Import Images
import Yoo from '../../Imgs/yoo.jpg';

// Import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  // UseEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // Image Mouse Event
  window.onload = function () {
    let imageContainer = document.querySelector('.imageContainer');
    let overlay = document.querySelector('.overlay');
    imageContainer.addEventListener('mousemove', function (e) {
      let x = e.offsetX;
      let y = e.offsetY;
      let rotateY = (-1 / 5) * x + 20;
      let rotateX = (4 / 30) * y - 20;

      overlay.style = `background-position: ${x / 5 + y / 5}%`;

      imageContainer.style = `transform : perspective(350px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

      imageContainer.addEventListener('mouseout', function () {
        overlay.style = 'filter : opacity(0)';
        imageContainer.style =
          'transform : perspective(350px) rotateY(0deg) retateX(0deg)';
      });
    });
  };

  return (
    <div className='home flex container ' id='DetailHome'>
      <div className='mainText'>
        <h1 data-aos='fade-up' data-aos-duration='2500'>
          Hi, I'm Yoo!
        </h1>
      </div>

      <div data-aos='fade-down' data-aos-duration='2500'>
        <div>
          <div className='imageContainer'>
            <div className='overlay'></div>
            <img src={Yoo} className='yoo-img ' alt='profile-img'></img>
          </div>
          <div className='subText' data-aos='fade-up'>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ['안녕하세요.', '프론트엔드 개발자', '유대현 입니다.'],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
