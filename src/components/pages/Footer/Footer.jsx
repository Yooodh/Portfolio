import React, { useEffect } from 'react';
import './Footer.css';

// Import Images
import Logo from '../../../assets/images/logo.png';

// Import Icons
import { TiSocialFacebook } from 'react-icons/ti';
import { AiFillYoutube } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa';

// Import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  // AOS 애니메이션 지속시간 설정
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // Add url
  const githuburl = 'https://github.com/Yooodh';
  const instagramurl = 'https://www.instagram.com/yo_o.dh/';
  const facebookurl = 'https://www.facebook.com/eogus2604';
  const youtubeurl = 'https://www.youtube.com/channel/UCnLHN_nLOt7cz0RBAAE5vMw';
  const addressurl =
    'https://www.google.co.kr/maps/place/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EA%B0%95%EC%84%9C%EA%B5%AC+%ED%99%94%EA%B3%A1%EB%8F%99/data=!3m1!4b1!4m6!3m5!1s0x357c9c3879383f59:0xe344f1ffd691427!8m2!3d37.5406979!4d126.8472722!16s%2Fm%2F0415mh3?entry=ttu';
  const mailurl = 'mailto:eogus2604@gmail.com';
  const phoneurl = 'tel:01066811532';

  return (
    <div className='footer'>
      <div className='sectionContainer container grid'>
        <div data-aos='fade-up' data-aos-duration='2500' className='gridOne'>
          <div className='logoDiv'>
            <img src={Logo} className='Logo' alt='logo' />
          </div>
          <p>SNS</p>
          <div className='socialIcon flex'>
            <FaGithub
              className='icon'
              onClick={() => {
                window.open(githuburl);
              }}
            />
            <FaInstagram
              className='icon'
              onClick={() => {
                window.open(instagramurl);
              }}
            />
            <TiSocialFacebook
              className='icon'
              onClick={() => {
                window.open(facebookurl);
              }}
            />
            <AiFillYoutube
              className='icon'
              onClick={() => {
                window.open(youtubeurl);
              }}
            />
          </div>
        </div>
        <div
          data-aos='fade-up'
          data-aos-duration='2500'
          className='footerLinks'
        >
          <li className='flex'>
            <div className='iconDiv'>
              <FaLocationDot className='infoIcon' />
            </div>
            <a href={addressurl} target='_blank' rel='noopener noreferrer'>
              Korea <br /> Seoul
            </a>
          </li>
          <li className='flex'>
            <div className='iconDiv'>
              <FaEnvelope className='infoIcon' />
            </div>
            <a href={mailurl} target='_blank' rel='noopener noreferrer'>
              eogus2604@gmail.com
            </a>
          </li>
          <li className='flex'>
            <div className='iconDiv'>
              <FaPhoneAlt className='infoIcon' />
            </div>
            <a href={phoneurl}>+82-10-6681-1532</a>
          </li>
        </div>
        <div
          data-aos='fade-up'
          data-aos-duration='2500'
          className='footerLinks'
        >
          <span className='linkTitle'>title</span>
          <li>
            <a href='/'>content</a>
          </li>
          <li>
            <a href='/'>content</a>
          </li>
          <li>
            <a href='/'>content</a>
          </li>
          <li>
            <a href='/'>content</a>
          </li>
        </div>
      </div>

      <div className='copyRightDiv flex'>
        <p>
          Developed by
          <a href='@' target='_blank'>
            &ensp;Yoo
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
