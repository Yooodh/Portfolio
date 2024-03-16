import React, { useState } from 'react';
import './Navbar.css';

// Imported Icons
import { AiFillSmile } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { FaMoon } from 'react-icons/fa';

// Imported Images
import logo from '../../Imgs/logo.png';

const Navbar = () => {
  // remove the NavBar in the small width screens
  const [active, setActive] = useState('navBarMenu');
  const showNavBar = () => {
    setActive('navBarMenu showNavBar');
  };
  const removeNavBar = () => {
    setActive('navBarMenu');
  };

  // add a background color to the second Navbar
  const [noBg, addBg] = useState('navBarTwo');
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg('navBarTwo navbar_With_Bg');
    } else {
      addBg('navBarTwo');
    }
  };
  window.addEventListener('scroll', addBgColor);

  return (
    <div className='navBar flex'>
      <div className='navBarOne flex'>
        <div>
          <AiFillSmile />
        </div>
        <div className='none flex'>
          <li className='flex'>
            <FaMoon className='icon' />
            Dark Mode
          </li>
        </div>
      </div>
      <div className={noBg}>
        <div className='logoDiv'>
          <img src={logo} className='Logo' alt='logo' />
        </div>

        <div className={active}>
          <ul className='menu flex'>
            <li onClick={removeNavBar} className='listItem'>
              Home
            </li>
            <li onClick={removeNavBar} className='listItem'>
              About Me
            </li>
            <li onClick={removeNavBar} className='listItem'>
              Skills and Tools
            </li>
            <li onClick={removeNavBar} className='listItem'>
              Projects
            </li>
          </ul>
        </div>
        <div onClick={showNavBar} className='toggleIcon'>
          <CgMenuGridO className='icon' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
