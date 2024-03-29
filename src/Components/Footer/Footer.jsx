import React, { useEffect } from 'react';
import './Footer.css';

// Imported Images
import Logo from '../../Imgs/logo.png';

// Imported Icons
import { TiSocialFacebook } from 'react-icons/ti';
import { AiFillYoutube } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

// Import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  // UseEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='footer'>
      <div className='sectionContainer container grid'>
        <div data-aos='fade-up' data-aos-duration='2500' className='gridOne'>
          <div className='logoDiv'>
            <img src={Logo} className='Logo' alt='logo' />
          </div>
          <p>SNS</p>
          <div className='socialIcon flex'>
            <FaGithub className='icon' />
            <FaInstagram className='icon' />
            <TiSocialFacebook className='icon' />
            <AiFillYoutube className='icon' />
          </div>
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
          <li>
            <a href='/'>content</a>
          </li>
          <li>
            <a href='/'>content</a>
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
          <li>
            <a href='/'>content</a>
          </li>
          <li>
            <a href='/'>content</a>
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
          010-1234-5678 | eogus2604@hanmail.net | Developed by
          <a href='@' target='_blank'>
            Yoo
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
