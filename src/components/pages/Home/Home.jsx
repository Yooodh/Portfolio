import React, { useEffect } from 'react';
import './Home.css';

// Import Typewriter
import Typewriter from 'typewriter-effect';

// Import Images
import Yoo from '../../../assets/images/yoo.jpg';

// Import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  // AOS 애니메이션 지속시간 설정
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // 이미지 마우스 이벤트
  useEffect(() => {
    const imageContainer = document.querySelector('.imageContainer');
    const overlay = document.querySelector('.overlay');

    // 마우스 이동
    const handleMouseMove = (e) => {
      let x = e.offsetX;
      let y = e.offsetY;
      let rotateY = (-1 / 5) * x + 20;
      let rotateX = (4 / 30) * y - 20;

      overlay.style.backgroundPosition = `${x / 5 + y / 5}%`;

      imageContainer.style.transform = `perspective(350px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    };

    // 마우스 아웃
    const handleMouseOut = () => {
      overlay.style.backgroundPosition = 'center';
      imageContainer.style.transform =
        'perspective(350px) rotateY(0deg) rotateX(0deg)';
    };

    // EventListener 추가
    imageContainer.addEventListener('mousemove', handleMouseMove);
    imageContainer.addEventListener('mouseout', handleMouseOut);

    // 컴포넌트가 unmount될 때 EventListener 제거
    return () => {
      imageContainer.removeEventListener('mousemove', handleMouseMove);
      imageContainer.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className='home flex container' id='detailHome'>
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
