import React from 'react';

import './Home.css';

import Typical from 'react-typical';
import Flip from 'react-reveal/Flip';

function Home() {
  return (
    <div className='wrap'>
      <header className='App-header'>
        <Flip top>
          <h2>Hi, I'm Yoo!</h2>
        </Flip>

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
      </header>
    </div>
  );
}

export default Home;
