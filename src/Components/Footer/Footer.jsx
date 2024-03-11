import React, { useEffect } from 'react';

// Imported Images
// import Logo from '../../assets/logo.png';

// Imported Icons
import { TiSocialFacebook } from 'react-icons/ti';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';

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
            {/* <img src={Logo} className='Logo' /> */}
          </div>
          <p>Title</p>
          <div className='socialIcon flex'>
            <TiSocialFacebook className='icon' />
            <AiOutlineTwitter className='icon' />
            <AiFillYoutube className='icon' />
            <FaPinterestP className='icon' />
          </div>
        </div>

        <div
          data-aos='fade-up'
          data-aos-duration='2500'
          className='footerLinks'
        >
          <span className='linkTitle'>title</span>
          <li>
            <a href=''>1</a>
          </li>
          <li>
            <a href=''>2</a>
          </li>
          <li>
            <a href=''>3</a>
          </li>
          <li>
            <a href=''>4</a>
          </li>
          <li>
            <a href=''>5</a>
          </li>
          <li>
            <a href=''>6</a>
          </li>
        </div>
        <div
          data-aos='fade-up'
          data-aos-duration='2500'
          className='footerLinks'
        >
          <span className='linkTitle'>title</span>
          <li>
            <a href=''>1</a>
          </li>
          <li>
            <a href=''>2</a>
          </li>
          <li>
            <a href=''>3</a>
          </li>
          <li>
            <a href=''>4</a>
          </li>
          <li>
            <a href=''>5</a>
          </li>
          <li>
            <a href=''>6</a>
          </li>
        </div>
        <div
          data-aos='fade-up'
          data-aos-duration='2500'
          className='footerLinks'
        >
          <span className='linkTitle'>title</span>
          <li>
            <a href=''>1</a>
          </li>
          <li>
            <a href=''>2</a>
          </li>
          <li>
            <a href=''>3</a>
          </li>
          <li>
            <a href=''>4</a>
          </li>
          <li>
            <a href=''>5</a>
          </li>
          <li>
            <a href=''>6</a>
          </li>
        </div>
      </div>

      <div className='copyRightDiv flex'>
        <p>
          Courtesy Design | Developed by
          <a href='@' target='_blank'>
            Yoo
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
