import React, { useState, useEffect } from 'react';
import './Navbar.css';

// Import Icons
import { CgMenuGridO } from 'react-icons/cg';
import { FaMoon } from 'react-icons/fa';
import { CiLight } from 'react-icons/ci';

// Import Images
import logo from '../../../assets/images/logo.png';

// Import ReactScroll
import { Link } from 'react-scroll';

const Navbar = ({ toggleTheme, theme }) => {
  // 작은 화면에서 NavBar 숨기기
  const [active, setActive] = useState('navBarMenu');
  const showNavBar = () => {
    setActive('navBarMenu showNavBar');
  };
  const removeNavBar = () => {
    setActive('navBarMenu');
  };

  const toggleNavBar = () => {
    setActive((prevActive) =>
      prevActive === 'navBarMenu' ? 'navBarMenu showNavBar' : 'navBarMenu'
    );
  };

  // navBarTwo에 배경색 추가
  const [noBg, addBg] = useState('navBarTwo');
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg('navBarTwo navbar_With_Bg');
    } else {
      addBg('navBarTwo');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', addBgColor);
    return () => {
      window.removeEventListener('scroll', addBgColor);
    };
  }, []);

  return (
    <div className='navBar flex'>
      <div className='navBarOne flex'>
        <div>
          <p>Yo_o.</p>
        </div>

        <div
          className='flex modeFont'
          onClick={toggleTheme}
          checked={theme === 'dark'}
        >
          <li className='flex textDark'>
            {theme === 'light' ? (
              <FaMoon className='icon' />
            ) : (
              <CiLight className='icon' />
            )}
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </li>
        </div>
      </div>
      <div className={noBg}>
        <div className='logoDiv'>
          <Link to='DetailHome' spy={true} smooth={true}>
            <li>
              <img
                src={logo}
                className='Logo'
                alt='logo'
                onClick={removeNavBar}
              />
            </li>
          </Link>
        </div>

        <div className={active}>
          <ul className='menu flex'>
            <Link to='DetailHome' spy={true} smooth={true} activeClass='active'>
              <li onClick={removeNavBar} className='listItem'>
                Home
              </li>
            </Link>

            <Link
              to='DetailSupport'
              spy={true}
              smooth={true}
              offset={-40}
              activeClass='active'
            >
              <li onClick={removeNavBar} className='listItem'>
                About Me
              </li>
            </Link>

            <Link
              to='DetailInfo'
              spy={true}
              smooth={true}
              offset={-108}
              activeClass='active'
            >
              <li onClick={removeNavBar} className='listItem'>
                Skills and Tools
              </li>
            </Link>

            <Link
              to='DetailProject'
              spy={true}
              smooth={true}
              offset={-100}
              activeClass='active'
            >
              <li onClick={removeNavBar} className='listItem'>
                Projects
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={toggleNavBar} className='toggleIcon'>
          <CgMenuGridO className='icon' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
