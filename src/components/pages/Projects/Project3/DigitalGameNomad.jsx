import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCloseCircleOutline } from 'react-icons/io5';

import './DigitalGameNomad.css';

// import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

// import React Slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// import Image
import DGNMain from '../../../../assets/images/DigitalGameNomad_Main.jpeg';
import DGNExhibitionCharacter from '../../../../assets/images/DigitalGameNomad_Character.png';
import DGNExhibition1 from '../../../../assets/images/DigitalGameNomad_Exhibition1.png';
import DGNExhibition2 from '../../../../assets/images/DigitalGameNomad_Exhibition2.png';
import DGNExhibitionGame1 from '../../../../assets/images/DigitalGameNomad_Game1.png';
import DGNExhibitionGame2 from '../../../../assets/images/DigitalGameNomad_Game2.png';
import DGNExhibitionGame3 from '../../../../assets/images/DigitalGameNomad_Game3.png';
import DGNLogin from '../../../../assets/images/DigitalGameNomad_Login.jpeg';
import DGNSignUp1 from '../../../../assets/images/DigitalGameNomad_SignUp1.jpeg';
import DGNSignUp2 from '../../../../assets/images/DigitalGameNomad_SignUp2.jpeg';
import DGNIntro from '../../../../assets/images/DigitalGameNomad_Intro.jpeg';
import DGNBoard1 from '../../../../assets/images/DigitalGameNomad_Board1.jpeg';
import DGNBoard2 from '../../../../assets/images/DigitalGameNomad_Board2.jpeg';
import DGNBoard3 from '../../../../assets/images/DigitalGameNomad_Board3.jpeg';
import DGNBoard4 from '../../../../assets/images/DigitalGameNomad_Inquiry.jpeg';
import DGNApply1 from '../../../../assets/images/DigitalGameNomad_Apply1.jpeg';
import DGNApply2 from '../../../../assets/images/DigitalGameNomad_Apply2.jpeg';
import DGNApply3 from '../../../../assets/images/DigitalGameNomad_ApplyList1.jpeg';
import DGNApply4 from '../../../../assets/images/DigitalGameNomad_ApplyList2.jpeg';
import DGNInfo1 from '../../../../assets/images/DigitalGameNomad_Info.jpeg';
import DGNInfo2 from '../../../../assets/images/DigitalGameNomad_Password.jpeg';
import DGNInfo3 from '../../../../assets/images/DigitalGameNomad_PasswordChange.jpeg';
import DGNInfo4 from '../../../../assets/images/DigitalGameNomad_PhoneNumberChange.jpeg';
import DGNService1 from '../../../../assets/images/DigitalGameNomad_Service1.jpeg';
import DGNService2 from '../../../../assets/images/DigitalGameNomad_Service2.jpeg';

function DigitalGameNomad() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // GoBack button
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const settings = {
    dots: true,
    pauseOnHover: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
  };

  // const scrollContainerRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     const delta = event.deltaY;
  //     scrollContainerRef.current.scrollTop += delta;
  //   };

  //   const container = scrollContainerRef.current;
  //   container.addEventListener('wheel', handleScroll);

  //   return () => {
  //     container.removeEventListener('wheel', handleScroll);
  //   };
  // }, []);

  return (
    <div className='project3 section'>
      <div className='hiddenBackIconContainer'>
        <div
          data-aos='fade-up'
          data-aos-duration='2500'
          className='flex hiddenBackIcon'
          onClick={handleGoBack}
        >
          <IoCloseCircleOutline size={30} className='icon' />
          <h3>&nbsp;CLOSE</h3>
        </div>
      </div>
      <div>
        <div
          data-aos='fade-left'
          data-aos-duration='2500'
          className='flex backIcon'
          onClick={handleGoBack}
        >
          <IoCloseCircleOutline size={30} className='icon' />
          <h3>&nbsp;CLOSE</h3>
        </div>
      </div>
      <div className='container projectDiv'>
        <div className='titleDiv flex'>
          <h1 data-aos='fade-right' data-aos-duration='2500'>
            Digital Game Nomad
          </h1>
        </div>
        <div />

        {/* page start */}
        <div className='section'>
          <h3>Main page</h3>
          <div className='imgContainer flex'>
            <img src={DGNMain} alt='Project1' className='' />
          </div>
        </div>
        {/* page end */}

        {/* page start */}
        <div className='section'>
          <h3>Intro page</h3>
          <div className='imgContainer flex'>
            <img src={DGNIntro} alt='Project1' className='' />
          </div>
        </div>
        {/* page end */}

        {/* page start */}
        <div className='section'>
          <h3>Login page</h3>
          <div className='imgContainer flex'>
            <img src={DGNLogin} alt='Project1' className='' />
          </div>
        </div>
        {/* page end */}

        {/* page start */}
        <div className='section'>
          <h3>SignUp page</h3>
          <Slider {...settings}>
            <div className='imgContainer flex' key='DGNSignUp1'>
              <img src={DGNSignUp1} alt='Project1' className='' />
            </div>
            <div className='imgContainer flex' key='DGNSignUp2'>
              <img src={DGNSignUp2} alt='Project1' className='' />
            </div>
          </Slider>
        </div>
        {/* page end */}

        {/* page start */}
        <div className='section'>
          <h3>Board page</h3>
          <Slider {...settings} className='slider'>
            <div className='imgContainer flex' key='DGNBoard1'>
              <img src={DGNBoard1} alt='Project1' className='' />
            </div>
            <div className='imgContainer flex' key='DGNBoard2'>
              <img src={DGNBoard2} alt='Project1' className='' />
            </div>
            <div className='imgContainer flex' key='DGNBoard3'>
              <img src={DGNBoard3} alt='Project1' className='' />
            </div>
            <div className='imgContainer flex' key='DGNBoard4'>
              <img src={DGNBoard4} alt='Project1' className='' />
            </div>
          </Slider>
        </div>
        {/* page end */}

        {/* page start */}
        <div className='section'>
          <h3>Apply page</h3>
          <Slider {...settings}>
            <div className='imgContainer flex' key='DGNApply1'>
              <img src={DGNApply1} alt='Project1' className='' />
            </div>
            <div className='imgContainer flex' key='DGNApply2'>
              <img src={DGNApply2} alt='Project1' className='' />
            </div>
            <div className='imgContainer flex' key='DGNApply3'>
              <img src={DGNApply3} alt='Project1' className='' />
            </div>
            <div className='imgContainer flex' key='DGNApply4'>
              <img src={DGNApply4} alt='Project1' className='' />
            </div>
          </Slider>
        </div>
        {/* page end */}

        {/* page start */}
        <div className='section'>
          <h3>Exhibition page</h3>
          <Slider {...settings}>
            <div className='imgContainer flex' key='DGNExhibitionCharacter'>
              <img src={DGNExhibitionCharacter} alt='Project1' className='' />
            </div>
            <div className='imgContainer flex' key='DGNExhibition1'>
              <img src={DGNExhibition1} alt='Project1' className='' />
            </div>
            <div className='imgContainer flex' key='DGNExhibition2'>
              <img src={DGNExhibition2} alt='Project1' className='' />
            </div>
            <div className='imgContainer flex' key='DGNExhibitionGame1'>
              <img src={DGNExhibitionGame1} alt='Project1' className='' />
            </div>
            <div className='imgContainer flex' key='DGNExhibitionGame2'>
              <img src={DGNExhibitionGame2} alt='Project1' className='' />
            </div>
            <div className='imgContainer flex' key='DGNExhibitionGame3'>
              <img src={DGNExhibitionGame3} alt='Project1' className='' />
            </div>
          </Slider>
        </div>
        {/* page end */}

        {/* page start */}
        <div className='section'>
          <h3>Info page</h3>
          <Slider {...settings}>
            <div className='imgContainer flex' key='DGNInfo1'>
              <img src={DGNInfo1} alt='Project1' className='' />
            </div>
            <div className='imgContainer flex' key='DGNInfo2'>
              <img src={DGNInfo2} alt='Project1' className='' />
            </div>
            <div className='imgContainer flex' key='DGNInfo3'>
              <img src={DGNInfo3} alt='Project1' className='' />
            </div>
            <div className='imgContainer flex' key='DGNInfo4'>
              <img src={DGNInfo4} alt='Project1' className='' />
            </div>
          </Slider>
        </div>
        {/* page end */}

        {/* page start */}
        <div className='section'>
          <h3>Service page</h3>
          <Slider {...settings}>
            <div className='imgContainer flex' key='DGNService1'>
              <img src={DGNService1} alt='Project1' className='' />
            </div>
            <div className='imgContainer flex' key='DGNService2'>
              <img src={DGNService2} alt='Project1' className='' />
            </div>
          </Slider>
        </div>
        {/* page end */}

        <div className='section'>
          <h3>Purpose</h3>
          <p>
            온라인 게임 전시관을 주제로 사용자들이 직접 체험 할 수 있도록
            <br />
            3D 환경을 다뤄보고자 개발하게 된 게임 전시관 형태의 프로젝트 입니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DigitalGameNomad;
