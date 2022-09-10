import '../index.css';
import Typical from 'react-typical';

function Main() {
  return (
    <div className='wrap'>
      <header className='App-header'>
        <h1>Hi, I'm Yoo!</h1>
        <img src='../imgs/yoo.JPG' className='yoo-img'></img>
        <p>
          <Typical
            loop={Infinity}
            wrapper='b'
            steps={[
              '안녕하세요.',
              1000,
              '프론트엔드 개발자',
              1000,
              '유대현 입니다.',
              1000,
            ]}
          />
        </p>
      </header>
    </div>
  );
}

export default Main;
